import { IInventoryManager } from "../../interfaces/IInventoryManager";



export class InventoryManager implements IInventoryManager{
    private inventory: Record<string, number> = {
        "item1": 10,
        "item2": 5,
    };

    public constructor() {
        
    }

    public ship(status: string, item: string, quantity: number) {
        console.log(`--- Updating Inventory ---`);
        if (status === 'shipped') {
            this.inventory[item] -= quantity;
            console.log(`Inventory for ${item} is now ${this.inventory[item]}`);

            console.log(`--------------------------`);
        }
    }


}