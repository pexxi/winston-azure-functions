import { LogEntry } from 'winston';
import TransportStream = require('winston-transport');
export declare type AzureFunctionsLogLevel = 'error' | 'warn' | 'info' | 'verbose';
export interface AzureFunctionsStreamOptions extends TransportStream.TransportStreamOptions {
    context: any;
    level?: AzureFunctionsLogLevel;
}
export declare class AzureFunctions extends TransportStream {
    context: any;
    level: AzureFunctionsLogLevel;
    name: string;
    constructor(options: AzureFunctionsStreamOptions);
    log({ level, message }: LogEntry, callback: () => void): void;
}
