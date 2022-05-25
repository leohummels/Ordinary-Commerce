import {validateLogin} from './email/validateLogin.operation'
import key from '../auth'

export class LoginService {
    

    static async userLogin(email:string, password:string) {
        const emailValid = await validateLogin.getLogin(email)
        const passwordValid = await validateLogin.getPassword(password)
        
    
        if(emailValid === true && passwordValid === true) 
        {   
            
            const keyNum = await key();
            await validateLogin.insertHash(keyNum, email);
            
            return keyNum;
        } 
        else
        {
            return false
        }

    }

}