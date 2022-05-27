import { CustumerService } from '../custumer.service'

export class Buy {

    private static async buyOperation(id: number, item_quanti:number): Promise<number> {
        const item:any = await CustumerService.findById(id);
        let operation = await item[0].quanti - item_quanti;
        return operation
    }

    public static async _buyOperation(id: number, item_quanti:number): Promise<number> {
        const buy = this.buyOperation(id, item_quanti);
        return buy
    }


}

