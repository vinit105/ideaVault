import express from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import auth from '../middleware/auth';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// Register
router.post('/register', [
  body('name').notEmpty().withMessage('Name required'),
  body('email').isEmail().withMessage('Valid email required'),
  body('password').isLength({ min: 6 }).withMessage('Password min 6 chars')
], async (req: express.Request, res: express.Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) return res.status(400).json({ message: 'User already exists' });

  user = new User({ name, email, password });
  await user.save();

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '7d' });
  res.cookie('token', token, { httpOnly: true, sameSite: 'strict' });
  res.json({ user: { id: user._id, name: user.name, email: user.email } });
});

// Login
router.post('/login', [
  body('email').isEmail().withMessage('Valid email required'),
  body('password').notEmpty().withMessage('Password required')
], async (req: express.Request, res: express.Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '7d' });
  res.cookie('token', token, { httpOnly: true, sameSite: 'strict' });
  res.json({ user: { id: user._id, name: user.name, email: user.email } });
});

// Logout
router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out' });
});

// Get current user
router.get('/me', auth, async (req, res) => {
  const user = await User.findById((req as any).user).select('-password');
  res.json({ user });
});

export default router;
