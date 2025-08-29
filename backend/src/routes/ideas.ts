// Extend Express Request type to include 'user'
declare global {
  namespace Express {
    interface Request {
      user?: { id: string };
    }
  }
}

import express from 'express';
import Idea from '../models/Idea';
import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import redisClient from '../config/redisClient';

const router = express.Router();

// Simple rate limit: max 5 submissions per hour per IP
const RATE_LIMIT = 5;
const RATE_LIMIT_WINDOW = 60 * 60; // 1 hour in seconds

router.post('/submit', async (req, res) => {
  try {
    const ip = req.ip;
    const { title, description, tags, implementationConcepts } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    // Rate limiting using Redis
    const rateKey = `rate:${ip}`;
    const currentCount = await redisClient.get(rateKey);
    if (currentCount && parseInt(currentCount) >= RATE_LIMIT) {
      return res.status(429).json({ message: 'Rate limit exceeded. Please try again later.' });
    }
    await redisClient.multi()
      .incr(rateKey)
      .expire(rateKey, RATE_LIMIT_WINDOW)
      .exec();

    // Hash idea content for proof-of-ownership
    const ideaContent = `${title}|${description}|${implementationConcepts || ''}|${(tags || []).join(',')}`;
    const ideaHash = crypto.createHash('sha256').update(ideaContent).digest('hex');

    // Check for duplicate idea hash in Redis
    const duplicateKey = `ideaHash:${ideaHash}`;
    const isDuplicate = await redisClient.get(duplicateKey);
    if (isDuplicate) {
      return res.status(409).json({ message: 'Duplicate idea detected.' });
    }
    await redisClient.set(duplicateKey, '1', { EX: 24 * 60 * 60 }); // Cache for 24h

    // Timestamp
    const timestamp = new Date();

    // (Optional) Encrypt idea data before saving
    // const secret = process.env.IDEA_ENCRYPT_SECRET || 'default_secret_key_32bytes!';
    // const iv = crypto.randomBytes(16);
    // const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secret), iv);
    // let encrypted = cipher.update(ideaContent, 'utf8', 'hex');
    // encrypted += cipher.final('hex');
    // const encryptedData = iv.toString('hex') + ':' + encrypted;

    // Save to DB
    const newIdea = new Idea({
      title,
      description,
      tags,
      implementationConcepts,
      createdAt: timestamp,
      ideaHash,
      // encryptedData // Uncomment if using encryption
    });
    const savedIdea = await newIdea.save();

    // Generate certificate object
    const certificate = {
      id: uuidv4(),
      title,
      submitter: req.user ? req.user.id : 'anonymous',
      timestamp,
      ideaHash,
      ideaId: savedIdea._id
    };

    // Cache certificate in Redis for download (24h)
    await redisClient.set(`certificate:${certificate.id}`, JSON.stringify(certificate), { EX: 24 * 60 * 60 });

    res.status(201).json({
      message: 'Idea submitted successfully',
      idea: savedIdea,
      certificate
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;
