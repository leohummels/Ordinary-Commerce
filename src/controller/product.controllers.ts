import {Request, Response} from 'express'
import { QueryResult } from 'pg';
import {pool} from '../config/database'


export const insertOne = async (req:Request, res:Response) => {
        const { name, price, quanti } = req.body
        const response = await pool.query('INSERT INTO products (name, price, quanti) VALUES ($1, $2, $3)',
        [name, price, quanti], (err:Error, respon: QueryResult) => {
            if(err) {
                console.log(err.stack)
            } else { 
                res.send(respon.rows[0])
            }});
      return response        
         
        //res.json(req.body)
    }

export const getAll = async (req:Request<{id: string}>, res:Response) => { 
       //const id = Number(req.params.id)
       const response = await pool.query('SELECT * FROM products ORDER BY name ASC', (err:Error, respon: QueryResult) => {
           if(err) {
               console.log(err.stack)
           } else {
              console.log(respon.rows)
              res.send(respon.rows)
           }})
           return response        
    }
    


export const getProductByID = async (req:Request<{id: string}>, res:Response) => { 
    const id = Number(req.params.id)
    const response = await pool.query('SELECT * FROM products WHERE id = $1', [id], (err:Error, respon: QueryResult) => {
        if(err) {
            console.log(err.stack)
        } else {
           console.log(respon.rows)
           res.send(respon.rows)
        }})
        return response        
}


export const putProduct = async (req:Request<{id: string}>, res:Response) => { 
    const id = Number(req.params.id)
    const {name, price, quanti} = req.body
    const response = await pool.query('UPDATE products SET name = $1, price = $2,quanti = $3 WHERE id = $4', [name, price, quanti, id])
        return res.status(200).send(req.body)        
}

export const deleteProduct = async (req:Request<{id: string}>, res:Response) => {
    const id = Number(req.params.id)
    const {name, price, quanti} = req.body
    const response = await pool.query('DELETE FROM PRODUCTS WHERE id = $1', [id])
        return res.status(200).send('Produto deletado com Sucesso!')
}


//export default Controller