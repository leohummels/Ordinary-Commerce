import {Request, Response} from 'express'
import { LoginService } from '../service/login/login.service'

export class UserLogin {

    static async login(req:Request<{email: string, password: string}>, res:Response){
        const loginParams = req.body
        try {
                const validate = await LoginService.userLogin(loginParams.email, loginParams.password)
                const str = "http://localhost:3000/home/" + encodeURIComponent(validate)
                

                if (validate !== false )
                {
                    res.status(200).redirect(str)
                }
                else 
                {   
                    res.status(200).send("Erro de validação")
                }
                
            
        } catch {
            return res.status(500).json("error server")
        }
    }

     static async home(req:Request, res:Response)
     {
        const parametro = await req.params.validate
        const str = await LoginService.userType(parametro);
        const endereco = "http://localhost:3000/home/" + encodeURIComponent(parametro) + "/" + encodeURIComponent(str)
        console.log(parametro)
        res.status(200).redirect(endereco);
     }

     static async userType(req:Request, res:Response) {
        res.status(200).send("Hello!")
    }



}