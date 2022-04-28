import express from 'express';
import routes from './routes/router';
import custumer_routes from './routes/custumer.routes'
import login_routes from './routes/login.routes'

export const app = express()
const router:any = routes
const custumerRoutes:any = custumer_routes
const loginRoutes:any = login_routes

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(router)
app.use(custumerRoutes)
app.use(loginRoutes)

export const server = app.listen(3000, () =>  {
    console.log('Running...')
})

