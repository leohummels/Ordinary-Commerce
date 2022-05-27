import {validateLogin} from './validate/validateLogin.operation';
import key from './auth';

export class LoginService {
    
     private static async userLogin(email:string, password:string) {
        const emailValid = await validateLogin.getLogin(email);
        const passwordValid = await validateLogin.getPassword(password);
        
    
        if(emailValid === true && passwordValid === true) 
        {   
            
            const keyNum = await key();
            await validateLogin.insertHash(keyNum, email);
            
            return keyNum;
        } 
        else
        {
            return false;
        }

    }

    public static async _userLogin(email:string, password:string) {
        const result = await this.userLogin(email, password);
        return result;
    }

     private static async userType(info:string) {

            const usertype = await validateLogin.whatUser(info);
            if(usertype == true) {
                return "BoasVendas"
            }
            else
            {
                return "BoasCompras"
            }
            
    }

    public static async _userType(info:string) {
        const result = await this.userType(info);
        return result;
    }

}