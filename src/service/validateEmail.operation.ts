import { Repository } from '../repository'
type repo = Repository


export class validateEmail {
    static repository: repo = new Repository
    static regexp:RegExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)?(\.[a-z]{2,3})$/gi
    
    static async validate(email: string) { 
            if(email.match(validateEmail.regexp)) {
                return true
            }  else {
                let result = "Por favor, insira uma e-mail válido."
                return result
            }
    }

    static async getEmail(email:string){
        const repoEmail = ""
    }
}