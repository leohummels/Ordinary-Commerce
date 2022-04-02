import { Repository } from '../repository'
import { CustumerService } from './custumer.service'

const repo = new Repository

export  async function buyOperation(id: number, item_quanti:number,): Promise<number> {
        const item:any = await new CustumerService(repo).findById(id)
        let operation = await item[0].quanti - item_quanti
        return operation
    }

