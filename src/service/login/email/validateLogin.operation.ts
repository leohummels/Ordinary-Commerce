import { Repository } from '../../../repository'
type repo = Repository


export class validateLogin {
    private static repo = [
         {
            "email": "fakemail@fakemail.com",
            "password": "123456789",
            "costumer": true,
            "hash": "",
        },
        {
            "email": "other_fakemail@fakemail.com",
            "password": "987654321",
            "costumer": false,
            "hash": ""
        }
    ]
    
    static async getLogin(email:string): Promise<boolean>{
        const consult:any = await validateLogin
                                .repo
                                .find(element => { return  element.email === email});
        if(consult.email === email) 
        {   
            
            return true
        }
        else
        {
            return false
        }
    }

    static async getPassword(password:string): Promise<boolean>{
        const consult:any = await validateLogin
                                .repo
                                .find(element => { return element.password === password})
        if(consult.password === password) 
        {
          
            return true
        }
        else
        {
            return false
        }
    }

    static async insertHash(key: string, email: string){
        const consult:any = await validateLogin
                                .repo
                                .find(element => { 
                                    if(element.email === email){
                                        element.hash = key
                                        return element.hash
                                        
                                    } 
                                });
    
        return consult;
    };

    static async whatUser(info: string): Promise<boolean> {
        try {
            const consult:any = await validateLogin
                                        .repo
                                        .find(element => { 
                                            if(element.hash === info)
                                            {   
                                                return element
                                            } 
                                        });
            return consult.costumer
        } catch {
            return false
        }
    }
}
