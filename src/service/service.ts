import { Repository } from '../repository';

export type repo = Repository

export class Service {
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
}