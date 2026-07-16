import { INotifier } from "../../interfaces/INotifier";

export class EmailNotifier implements INotifier {
    public constructor() {

    }

    public sendNotification(status: string, orderId: string) {
        console.log(`--- Sending Notification ---`);
        if (status === 'shipped') {
            // Hardcoded email sending
            console.log(`Email to customer: Your order ${orderId} has shipped!`);
        } else if (status === 'delivered') {
            console.log(`Email to customer: Your order ${orderId} has been delivered.`);
        }
        console.log(`--------------------------`);
    }
}