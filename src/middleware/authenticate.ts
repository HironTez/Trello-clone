import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';


declare module 'express-serve-static-core' {
    interface Request {
        user: { userId: string, login: string };
    }
}

const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
        // @ts-ignore
        jwt.verify(token, process.env['JWT_SECRET_KEY']!, (err: Error, user: { userId: string, login: string }) => {
            if (!err) {
                req.user = user as { userId: string, login: string };
            } else {
                res.sendStatus(403);
            }
        });
    }

    next();
};

export default authenticateToken;