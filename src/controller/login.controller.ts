import {Request, Response, NextFunction} from 'express'
import { send } from 'process'
import { LoginService } from '../service/login/login.service'

export class UserLogin {
    static email: string
    static password: string

    static async login(req:Request<{email: string, password: string}>, res:Response){
        const loginParams = req.body
        try {
         const validate = await LoginService.userLogin(loginParams.email, loginParams.password)
         const str = "http://localhost:3000/home/:validate" + encodeURIComponent(validate)
         res.status(200).redirect(str)
       
        } catch {
            return res.status(500).json("error server")
        }
    }

     static async home(req:Request, res:Response){
       res.send("home page")
     }
}