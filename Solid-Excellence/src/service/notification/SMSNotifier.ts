import { INotifier } from "../../interfaces/INotifier";

export class SMSNotifier implements INotifier {
    public constructor() {

    }

    public sendNotification(status: string, orderId: string) {
        console.log(`--- Sending Notification ---`);
        if (status === 'shipped') {
            // Hardcoded sms sending
            console.log(`SMS to customer: Your order ${orderId} has shipped!`);
        } else if (status === 'delivered') {
            console.log(`SMS to customer: Your order ${orderId} has been delivered.`);
        }
        console.log(`--------------------------`);
    }
}