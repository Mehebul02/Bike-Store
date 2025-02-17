import express, { Request, Response } from 'express'
import cors from "cors";
import router from './routes';
import cookieParser from 'cookie-parser';

const app = express()


app.use(express.json())
app.use(cookieParser());

app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));

// app.use('/api/product', useRouter)
// app.use('/api/order', orderRoute)

app.use('/api/v1', router);


app.get('/', (req: Request, res: Response) => {
    res.send({
        status: true,
        message: "Server is running"
    })
})


export default app