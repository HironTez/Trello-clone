import { Logger } from '@nestjs/common';
export declare class MyLogger extends Logger {
    log(message: string): void;
    error(message: string, _trace: string): void;
}
