import {Request, Response} from 'express'
import { LoginService } from '../service/login/login.service'

export class UserLogin {
    static email: string
    static password: string

    static async login(req:Request<{email: string, password: string}>, res:Response){
        const loginParams = req.body
        try {
         const validate= await LoginService.userLogin(loginParams.email, loginParams.password)
         return res.status(200).json(validate)
        } catch {
            return res.status(500).json("error server")
        }
    }
}