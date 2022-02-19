
import {Request, Response} from 'express'
import {pool} from '../config/database'



    //Parei aqui!
export const insertOne = async (req:Request, res:Response) => {
        const { name, price, quanti } = req.body
        const reponse = await pool.query('INSERT INTO products (name, price, quanti) VALUES ($1, $2, $3)',
        [name, price, quanti]); 
        res.json(req.body)
    }

/*export const getProductByID = async (req:Request, res:Response) => { 
    const response = await pool.query('SELECT ')
}*/


//export default Controller