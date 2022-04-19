import {Request, Response} from 'express'


export class UserLogin {
    static email: string
    static password: string

    static async login(req:Request<{email: string}>, res:Response){
        try {
         const result: string = "inserir classe login.Service" 
        } catch {

        }
    }
}