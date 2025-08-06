import express from 'express';
import Idea from '../models/Idea';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { title, description, tags } = req.body;

    if (!title || !description) {
      return res.status(400).json({ message: 'Title and description are required' });
    }

    const newIdea = new Idea({ title, description, tags });
    const savedIdea = await newIdea.save();

    res.status(201).json({ message: 'Idea submitted successfully', idea: savedIdea });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;
