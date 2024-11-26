import { Request,Response } from "express"
import { orderService } from "./order.service"

const createOrder = async (req: Request, res: Response) => {

    try {
        const payload = req.body
        const result = await orderService.createOrder(payload)
        res.json({
            success: true,
            message: "order created successfully",
            data: result
        })
    }
    catch (error) {
        res.json({
            status: false,
            message: "Validation failed",
            error
        })
    }


}


export const orderController = {
    createOrder
}