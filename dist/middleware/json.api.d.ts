import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class JSONAPIMiddleware implements NestMiddleware {
    use(_req: Request, res: Response, _next: NextFunction): void;
}
