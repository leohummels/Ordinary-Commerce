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
        .then(() => { return this.productObject})
        return  this.productObject
    }

    async getList(list:string) {
        const response = await pool.query('SELECT * FROM $1:name ORDER BY id',[list])
        return response
    }

    async getById(id:number) {
        const response = await pool.query('SELECT * FROM products WHERE $1=id', [id])
        return response
    }

    async updateById(name:string, price:number, quanti:number, id:number) {
        const response = await pool.query('UPDATE products SET name = $1, price = $2,quanti = $3 WHERE id = $4', [name, price, quanti, id])
        return response
    }

    async Delete(id:number){
        const response = await pool.query('DELETE FROM PRODUCTS WHERE id = $1', [id])
        return response
    }
}