import { Router } from "express";
import { orderController } from "./order.controller";


const orderRoute = Router()

orderRoute.post('/create-order', orderController.createOrder)

export default orderRoute