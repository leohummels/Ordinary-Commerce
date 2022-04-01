import {Request, Response} from 'express'
import { Repository } from '../repository';
import { Service } from '../service/service'

const repo = new Repository
const repository = new Service(repo)

export class BuyerController {

    async getAll (req:Request<{list:string}>, res:Response) { 
        try {
        const response:any = await repository.findAll(req.params.list)
        res.status(200).send(response)
        } catch {
            res.status(400).send('Algo de errado não está certo')
            throw new Error("Check your URL")
        }
    }

}