import {Router} from 'express';
import {Controller, /*insertOne, getAll, putProduct, deleteProduct*/} from '../controller/product.controllers';
import {getOne_Kart} from '../controller/buy.controllers';


const controller = new Controller
const router = Router()

//Product Routes
router.post('/products/post', controller.insertOne)
router.get('/products/:id', controller.getProductByID)
router.get('/list/:list', controller.getAll)
//router.put('/products/:id', putProduct)
//router.delete('/products/:id', deleteProduct)

//Buy Routes
router.get('/products/kart/:id', getOne_Kart)

export default router