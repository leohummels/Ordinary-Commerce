import {Request, Response} from 'express'
import { QueryResult } from 'pg';
import {pool} from '../config/database'
import { Repository } from '../repository';

export type repo = Repository

export class Service {
    repository:repo
    
   constructor(repository: repo) {
        this.repository = repository
    }

    async create(name:string, price:number, quanti:number) {
        await this.repository.insertOneProduct(name, price, quanti)
    }

    async findAll(){
        await this.repository.getList()
    }

    async findById(id:number){
        await this.repository.getById(id)
    }

}