import { Repository } from '../../repository'
import {Buy} from './buy/buy.operation'

type repo = Repository

export class CustumerService {
    static repository: repo = new Repository

   constructor(private repository: repo) {
        this.repository = repository
    }

    static async create(name:string, price:number, quanti:number) {
        const response = await this.repository.insertOneProduct(name, price, quanti)
        return response
    }

    static async findAll(list:string){
        const response = await this.repository.getList(list)
        return response
    }

    static async findById(id:number) {
       const response = await this.repository.getById(id)
       return response
    }

    static async buying(name:string, price:number, item_quanti:number, id:number){
        const put_quanti = await Buy._buyOperation(id, item_quanti)
        const response = await this.repository.updateById(name, price, put_quanti, id)
        return response
    }

    static async deleteById(id:number){
        const response = await this.repository.Delete(id)
        return response
    }

    
}