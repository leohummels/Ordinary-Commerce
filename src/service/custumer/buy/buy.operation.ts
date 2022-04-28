import { CustumerService } from '../custumer.service'


export  async function buyOperation(id: number, item_quanti:number,): Promise<number> {
        const item:any = await CustumerService.findById(id)
        let operation = await item[0].quanti - item_quanti
        return operation
    }

