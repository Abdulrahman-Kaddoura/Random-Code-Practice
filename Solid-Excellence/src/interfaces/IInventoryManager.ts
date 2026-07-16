export interface IInventoryManager {
    ship(status: string, item: string, quantity: number): any;
}