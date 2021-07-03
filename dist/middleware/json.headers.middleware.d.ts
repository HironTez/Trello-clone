import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class JsonHeadersMiddleware implements NestMiddleware {
    use(_req: Request, res: Response, next: NextFunction): void;
}
