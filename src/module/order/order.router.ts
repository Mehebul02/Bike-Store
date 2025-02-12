import { Router } from "express";
import { orderController } from "./order.controller";


const router = Router()

router.post('/create-order', orderController.createOrder)
router.get('/revenue',orderController.revenueOrder)

export const orderRoutes = router