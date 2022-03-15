import {Request, Response} from 'express'
import { Repository } from '../repository';
import { Service } from '../service/service'



const repo = new Repository
const repository = new Service(repo)

export class Controller {

    async getAll (req:Request, res:Response) { 
        const response:any = await repository.findAll(req.params.list)
        res.status(200).send(response)
        
    }

    async getProductByID (req:Request<{id: string}>, res:Response) { 
        const response:any = await repository.findById(parseInt(req.params.id))
        res.status(200).send(response)
    }

    async insertOne (req:Request, res:Response) {
        const { name, price, quanti } = req.body
        const response = await repository.create(name, price, quanti)
        res.send(response)   
    }

    async putProduct(req:Request<{id: string}>, res:Response){ 
        const id = Number(req.params.id)
        const {name, price, quanti} = req.body
        const response = await repository.putById(name, price, quanti, id)
        return res.status(200).send(req.body)        
    }

    async deleteProduct(req:Request<{id: string}>, res:Response){
        const id = Number(req.params.id)
        const response = await repository.DeleteById(id)
        return res.status(200).send('Produto deletado com Sucesso!')
    }
}

/*
export const putProduct = async (req:Request<{id: string}>, res:Response) => { 
    const id = Number(req.params.id)
    const {name, price, quanti} = req.body
    const response = await pool.query('UPDATE products SET name = $1, price = $2,quanti = $3 WHERE id = $4', [name, price, quanti, id])
        return res.status(200).send(req.body)        
}
export const 
//export default Controller*/
