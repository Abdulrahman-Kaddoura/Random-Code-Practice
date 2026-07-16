export interface INotifier {
    sendNotification(status: string, orderId: string): any;
}