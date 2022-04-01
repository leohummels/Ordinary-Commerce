import {Router} from 'express';
import {BuyerController} from '../controller/buyer.controllers';

const buyController = new BuyerController
const router = Router()

router.get('/buyerlist/:list', buyController.getAll)

export default router