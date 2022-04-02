import express from 'express';
import routes from './routes/router';
import buyer_routes from './routes/custumer.routes'

export const app = express()
const router:any = routes
const buyRoutes:any = buyer_routes

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(router)
app.use(buyRoutes)

export const server = app.listen(3000, () =>  {
    console.log('Running...')
})

