import { OrderStatusManager } from "./OrderStatusManager";
import { InventoryManager } from "./service/inventory/InventoryManager";
import { ConsoleLogger } from "./service/logger/ConsoleLogger";
import { FileLogger } from "./service/logger/FileLogger";
import { LoggerService } from "./service/logger/LoggerService";
import { EmailNotifier } from "./service/notification/EmailNotifier";
import { NotificationService } from "./service/notification/NotificationService";
import { SMSNotifier } from "./service/notification/SMSNotifier";

// --- Client Code ---
console.log("Processing a shipped order...");

// Notifications
const notifService = new NotificationService();
const emailNotif = new EmailNotifier();
const smsNotif = new SMSNotifier();
notifService.addNotifier(emailNotif);
notifService.addNotifier(smsNotif);


// Logger
const logger = new LoggerService();
const consoleLogger = new ConsoleLogger;
const fileLogger = new FileLogger();
logger.addLogger(consoleLogger);
logger.addLogger(fileLogger);

const invManager = new InventoryManager();


const manager = new OrderStatusManager(notifService, logger, invManager);

manager.updateStatus("order-123", "shipped", "item1", 2);
console.log("\nProcessing a delivered order...");
manager.updateStatus("order-456", "delivered", "item2", 1);