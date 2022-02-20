import {Router} from 'express';
import {insertOne, getProductByID, getAll, putProduct} from '../controller/controllers';


//const controller = 
const router = Router()

router.post('/somepost', insertOne)
router.get('/products/:id', getProductByID)
router.get('/getAll', getAll)
router.put('/products/:id', putProduct)

export default router