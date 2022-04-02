import { Repository } from '../repository'
import {buyOperation} from './buy.operation'

type repo = Repository

export class CustumerService {
   constructor(private repository: repo) {
        this.repository = repository
    }

    async create(name:string, price:number, quanti:number) {
        const response = await this.repository.insertOneProduct(name, price, quanti)
        return response
    }

    async findAll(list:string){
        const response = await this.repository.getList(list)
        return response
    }

    async findById(id:number) {
       const response = await this.repository.getById(id)
       return response
    }

    async buying(name:string, price:number, item_quanti:number, id:number){
        let put_quanti = await buyOperation(id, item_quanti)
        const response = await this.repository.updateById(name, price, put_quanti, id)
        return response
    }

    async deleteById(id:number){
        const response = await this.repository.Delete(id)
        return response
    }

    
}