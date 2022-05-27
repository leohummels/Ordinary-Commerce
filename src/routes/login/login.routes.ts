import {Router} from 'express';
import {UserLogin} from '../../controller/login/login.controller'

const router = Router()

router.post('/login', UserLogin.login)
router.get('/home/:validate', UserLogin.home)
router.get('/home/:validate/:type', UserLogin.userType)

export default router