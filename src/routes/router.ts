import {Router} from 'express';
import {insertOne, getProductByID, getAll, putProduct, deleteProduct} from '../controller/product.controllers';
import {getOne_Kart} from '../controller/buy.controllers';


//const controller = 
const router = Router()

//Product Routes
router.post('/products/', insertOne)
router.get('/products/:id', getProductByID)
router.get('/products/List', getAll)
router.put('/products/:id', putProduct)
router.delete('/products/:id', deleteProduct)

//Buy Routes
router.get('/products/kart/:id', getOne_Kart)

export default router