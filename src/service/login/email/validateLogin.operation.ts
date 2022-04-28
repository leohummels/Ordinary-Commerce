import { Repository } from '../../../repository'
type repo = Repository


export class validateLogin {
    static repo = {
        "email": "fakemail@fakemail.com",
        "password": "123456789"
    }
    //static repository: repo = new Repository
    /*static regexp:RegExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)?(\.[a-z]{2,3})$/gi

    static async validate(email: string) { 
            if(email.match(validateEmail.regexp)) {
                return true
            }  else {
                let result = "Por favor, insira uma e-mail válido."
                return result
            }
    }*/

    static async getLogin(email:string){
        const repoEmail = validateLogin.repo.email
        if (email = repoEmail) {
            return true
        } else {
            return false
        }
    }

    static async getPassword(password:string){
        const repoPassword = validateLogin.repo.password
        if (password = repoPassword) {
            return true
        } else {
            return false
        }
    }
}