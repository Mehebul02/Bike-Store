import { Request, Response } from "express"
import { orderService } from "./order.service";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";


const createOrder = catchAsync(async (req, res) => {
    const payload = req.body
        const result = await orderService.createOrder(payload)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Order created successfully',
        data: result,
    })

})



// const createOrder = async (req: Request, res: Response) => {

//     try {
//         const payload = req.body
//         const result = await orderService.createOrder(payload)
//         res.json({
//             success: true,
//             message: "order created successfully",
//             data: result
//         })
//     }
//     catch (error) {
//         res.json({
//             status: false,
//             message: "Validation failed",
//             error
//         })
//     }


// }

const revenueOrder = catchAsync(async (req, res) => {
    const totalRevenue = await orderService.revenueProduct()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Total revenue calculated from all orders',
        data: totalRevenue,
    })

})

// const revenueOrder = async (req: Request, res: Response) => {

//     try {
//         const totalRevenue = await orderService.revenueProduct()
//         res.json({
//             success: true,
//             message: "Total revenue calculated from all orders",
//             data: totalRevenue
//         })
//     }
//     catch (error) {
//         res.json({
//             status: false,
//             message: "Error calculating revenue",
//             error
//         })
//     }


// }

export const orderController = {
    createOrder,
    revenueOrder
}