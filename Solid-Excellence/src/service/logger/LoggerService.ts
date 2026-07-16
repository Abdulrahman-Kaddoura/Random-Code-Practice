import { ILogger } from "../../interfaces/ILogger";



export class LoggerService implements ILogger{
    private loggers : ILogger[];
    public constructor() {
        this.loggers = [];
    }

    public addLogger(logger: ILogger) {
        this.loggers.push(logger);
    }
    
    public logEvent(status: string, orderId: string) {
        this.loggers.forEach(logger => logger.logEvent(status, orderId));
    }
}