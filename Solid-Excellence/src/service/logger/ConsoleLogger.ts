import { ILogger } from "../../interfaces/ILogger";


export class ConsoleLogger implements ILogger {
    public constructor() {

    }

    public logEvent(status: string, orderId: string) {
        console.log(`--- Logging Event ---`);
        const logMessage = `Order ${orderId} status updated to ${status} at ${new Date().toISOString()} via console`;
        // Hardcoded console logging
        console.log(logMessage);
        console.log(`--------------------------`);
    }
}