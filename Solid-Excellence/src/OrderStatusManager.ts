// --- Legacy System ---

import { IInventoryManager } from "./interfaces/IInventoryManager";
import { ILogger } from "./interfaces/ILogger";
import { INotifier } from "./interfaces/INotifier";

export class OrderStatusManager {

    private notifService: INotifier;
    private logger: ILogger;
    private invManager: IInventoryManager;

    public constructor(notifService: INotifier, logger: ILogger, invManager: IInventoryManager) {
        this.notifService = notifService;
        this.logger = logger;
        this.invManager = invManager;
    }

    updateStatus(orderId: string, status: 'shipped' | 'delivered', item: string, quantity: number) {
        
        // 1. Notification Logic
        this.notifService.sendNotification(status, orderId);

        // 2. Inventory Logic
        this.invManager.ship(status, item, quantity);
        
        // 3. Logging Logic
        this.logger.logEvent(status, orderId);
    }
}


