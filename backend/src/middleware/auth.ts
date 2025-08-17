import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function (req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    (req as any).user = (decoded as any).id;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
}
