import {Router} from 'express';
import {UserLogin} from '../controller/login.controller'

const router = Router()

router.post('/login', UserLogin.login)
router.get('/home/:validate', UserLogin.home)

export default router