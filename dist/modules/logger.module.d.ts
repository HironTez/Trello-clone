import { Logger } from '@nestjs/common';
export declare class MyLogger extends Logger {
    log(message: string): void;
    error(_message: string, trace: string): void;
}
