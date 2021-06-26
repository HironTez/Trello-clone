import { Request, Response, NextFunction } from 'express';
import logger from '../modules/logger';
import getTime from '../modules/current.time';

const logHandler = (req: Request, res: Response, next: NextFunction): void => {
    logger.log(`[${getTime()}] Url: ${req.url}; Query parameters: ${JSON.stringify(req.query)}; Body: ${JSON.stringify(req.body)};`); // Log url, query parameters
    res.on('finish', () => {
        logger.log(` Status code: ${res.statusCode}\n`); // Log status code
    });
    next();
};

export = logHandler;