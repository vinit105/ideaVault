import connectDB from './config/connectDB';
import ideasRoute from './routes/ideas';
import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import authRoutes from './routes/auth';
import rateLimit from 'express-rate-limit';
import auth from './middleware/auth';

connectDB();

const app = express();
const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGO_URI!)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Middleware
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Auth routes
app.use('/auth', authRoutes);

// Basic routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to IdeaVault API',
    version: '1.0.0',
    status: 'running'
  });
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Ideas routes placeholder
app.use('/api/ideas', ideasRoute);


// User routes placeholder
app.get('/api/users', (req, res) => {
app.get('/private', auth, (req, res) => {
  res.json({ message: 'This is a protected route' });
});
  res.json({ 
    users: [],
    message: 'Users endpoint - coming soon'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.originalUrl
  });
});

// Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 IdeaVault Backend running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
});

export default app;
