import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const secretKey = 'your-secret-key';
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];

    if (!token) return res.sendStatus(401);

    jwt.verify(token as string, secretKey, (err: any, user: any) => {
        if (err) return res.sendStatus(403);

        req.user = user;
        next();
    });
}
