import { Request, Response } from "express"
import { orderService } from "./order.service";
import Oder from "./order.model";

// const createOrder = async (req: Request, res: Response) => {

//     const { email, productId, quantity: orderQuantity } = req.body;

//   try {
//     const product = await Product.findById(productId);

//     if (!product) {
//       return res.status(404).json({ error: 'Product not found' });
//     }

//     if (product.quantity < orderQuantity) {
//       return res.status(400).json({
//         error: 'Insufficient stock',
//         availableStock: product.quantity
//       });
//     }


//     product.quantity -= orderQuantity;
//     if (product.quantity === 0) {
//       product.inStock = false;
//     }
//     await product.save();

//     // ৪. অর্ডার তৈরি করো
//     const order = new Order({
//       email,
//       product: productId,
//       quantity: orderQuantity,
//       totalPrice: product.price * orderQuantity
//     });
//     await order.save();

//     return res.status(201).json({
//       message: 'Order placed successfully',
//       data: order
//     });

//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }

// }

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
const revenueOrder = async (req: Request, res: Response) => {

    try {
        const totalRevenue = await orderService.revenueProduct()
        res.json({
            success: true,
            message: "Total revenue calculated from all orders",
            data: totalRevenue
        })
    }
    catch (error) {
        res.json({
            status: false,
            message: "Error calculating revenue",
            error
        })
    }


}

export const orderController = {
    createOrder,
    revenueOrder
}