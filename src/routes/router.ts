import {Router} from 'express';
import {insertOne} from '../controller/controllers';


//const controller = 
const router = Router()

router.post('/somepost', insertOne/*(req, res) => {
    res.send('some get route')
}*/)

export default router