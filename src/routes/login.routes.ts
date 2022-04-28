import {Router} from 'express';
import {UserLogin} from '../controller/login.controller'

const router = Router()

router.post('/login', UserLogin.login)

export default router