import {Router} from 'express';
import {Controller, /*insertOne, getAll, putProduct, deleteProduct*/} from '../controller/product.controllers';



const controller = new Controller
const router = Router()

//Product Routes
router.post('/products/post', controller.insertOne)
router.get('/products/:id', controller.getProductByID)
router.get('/list/:list', controller.getAll)
router.put('/update/:id', controller.putProduct)
router.delete('/products/:id', controller.deleteProduct)


export default router