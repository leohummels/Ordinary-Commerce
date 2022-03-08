import { QueryResult } from 'pg';
import { queryResult } from 'pg-promise';
import {pool} from '../config/database'


export class Repository {
    productCollection: any;
    productObject: any
  
    

    constructor () {
        this.productCollection = null
        this.productObject = null
    }

     async insertOneProduct(name:string, price:number, quanti:number) {
         this.productObject = { name: name, price: price, quanti: quanti }
         await pool.query('INSERT INTO products (name, price, quanti) VALUES ($1, $2, $3)',[name, price, quanti])
        .then(() => { return this.productObject}).catch(404)
        return  this.productObject
    }

    async getList(list:string):Promise<[]> {
        const response = await pool.query('SELECT * FROM $1:name ORDER BY id',[list])
        return response
    }

    async getById(id:number) {
        const response = await pool.query('SELECT * FROM products WHERE id = $1', [id])
        return response
    }
}