import { INotifier } from "../../interfaces/INotifier";



export class NotificationService implements INotifier{
    private notifiers: INotifier[];

    public constructor() {
        this.notifiers = [];
    }

    public addNotifier(notifier: INotifier) {
        this.notifiers.push(notifier);
    }
    
    public sendNotification(status: string, orderId: string) {
        this.notifiers.forEach(notifier => notifier.sendNotification(status, orderId));
    }
}