export interface ILogger {
    logEvent(status: string, orderId: string): any;
}