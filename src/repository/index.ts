import { findSourceMap } from 'module';
import { QueryResult } from 'pg';
import {pool} from '../config/database'


export class Repository {
    productCollection: any;
    productObject: any
  
    

    constructor () {
        this.productCollection = null
        this.productObject = null
    }

    async insertOneProduct(name:string, price:number, quanti:number) {
         this.productObject = await {name: name, price: price, quanti: quanti}
         this.productCollection = await pool.query('INSERT INTO products (name, price, quanti) VALUES ($1, $2, $3)'
        , [name, price, quanti]
        ,(err:Error, respon: QueryResult) => {
                    if(err) {
                        console.log(err.stack)
                    } else { 
                        console.log(this.productObject)
                }
            }
        );

        return this.productObject
    }

    async getList() {
        const {rows} = await pool.query('SELECT * FROM products ORDER BY name ASC')
        return rows
    }

    async getById(id:number) {
        const {rows} = await pool.query('SELECT * FROM products WHERE id = $1', [id])
        console.log(rows)
        return rows[0]
        //return this.productCollection
    }
}