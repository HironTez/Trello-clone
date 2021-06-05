import { Request, Response, NextFunction } from 'express';
import logger from '../modules/logger';
import getTime from '../modules/current.time';

const reqErrorHandler = (req: Request, _res: Response, next: NextFunction): void => {
    req.on('error', (error: Error) => {
        logger.error(`[${getTime()}] ${error.stack}`); // Log error
    });
    next();
};

export = reqErrorHandler;