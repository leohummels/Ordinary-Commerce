import {NextFunction, Request, Response} from 'express'
import { QueryResult } from 'pg';
import {pool} from '../config/database'


//Parei aqui!
    export const getOne_Kart = async (req:Request<{id: string}>, res:Response, next:NextFunction) => { 
        let selectProd;
        const id = Number(req.params.id)
        
        const response = await pool.query('SELECT * FROM products WHERE id = $1', [id], (err:Error, respon: QueryResult) => {
            if(err) {
                console.log(err.stack)
            } else {
               selectProd = respon.rows[0]
               selectProd.quanti = selectProd.quanti - 1
               
               //Update da quantidade de itens no DB
               const {quanti} = selectProd
               const treatment= pool.query('UPDATE products SET quanti = $1 WHERE id = $2', [quanti, id]) 
               res.send(respon.rows)
            }})

        }     
        