

import express, { Request, Response } from 'express'
import useRouter from './module/product/product.router'
import cors from "cors";
import orderRoute from './module/order/order.router';

const app = express()


app.use(express.json())
app.use(cors());

app.use('/api/product', useRouter)
app.use('/api/order', orderRoute)


app.get('/', (req: Request, res: Response) => {
    res.send({
        status: true,
        message: "Server is running"
    })
})


export default app