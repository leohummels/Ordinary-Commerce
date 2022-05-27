import {Router} from 'express';
import {CustumerController} from '../../controller/costumer/custumer.controllers';
import { Controller } from '../../controller/product/product.controllers';

const controller = new Controller
const buyController = new CustumerController
const router = Router()

router.get('/custumer/listAll/:list', controller.getAll)
router.get('/custumer/:id', buyController.getProductByID)
router.put('/custumer/kart/buy/:id', buyController.buyProduct)

export default router