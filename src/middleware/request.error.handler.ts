import { Request, Response, NextFunction } from 'express';
import logger from '../modules/logger';
import getTime from '../modules/current.time';

const reqErrorHandler = (req: Request, res: Response, next: NextFunction): void => {
    req.on('error', (error: Error) => {
        logger.error(`[${getTime()}] ${error.stack}`); // Log error
        res.status(500).send(); // Send error status code
    });
    next();
};

export = reqErrorHandler;