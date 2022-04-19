import {validateEmail} from './validateEmail.operation'

export class LoginService {

    static async userEmail(email:string) {
        const emailValid = validateEmail.validate(email)
    }

}