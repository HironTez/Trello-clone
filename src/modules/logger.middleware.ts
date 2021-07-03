import { Logger } from '@nestjs/common';
import logger from '../services/logger';
import { getTime } from 'src/services/current.time';

export class MyLogger extends Logger {
    log(message: string) {
        logger.log(`[${getTime()}] ${message}`, true);
    };
    error(message: string, _trace: string) {
        logger.error(`[${getTime()}] ${message}`);
    };
}