import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class JsonHeadersMiddleware implements NestMiddleware {
    use(_req: Request, res: Response, next: NextFunction) {
        res.setHeader('Content-Type', 'application/json');
        next();
    };
};