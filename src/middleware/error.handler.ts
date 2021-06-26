import logger from '../modules/logger';
import getTime from '../modules/current.time';

const errorHandle = (error: Error): void => {
    logger.error(`[${getTime()}] ${error}`);
};

const errorHandler = (): void => {
    process.on('uncaughtException', errorHandle);
    process.on('unhandledRejection', errorHandle);
};

export = errorHandler;