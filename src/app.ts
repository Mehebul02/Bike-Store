

import express, { Request, Response } from 'express'
import useRouter from './module/product/product.router'

const app = express()
app.use(express.json())

app.use('/api/product', useRouter)

app.get('/', (req: Request, res: Response) => {
    res.send({
        status: true,
        message: "Server is running"
    })
})


export default app