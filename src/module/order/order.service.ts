import { IOrder } from "./order.interface";
import Order from "./order.model";



const createOrder = async (payload: IOrder): Promise<IOrder> => {
    const result = await Order.create(payload)
    return result
}

// const revenueProduct = async () => {
//     const result = await Order.find()
//     return result
// }
const revenueProduct = async () => {
    
       
        const totalRevenue = await Order.aggregate([
          {
            $lookup: {
              from: 'products', 
              localField: 'product', 
              foreignField: '_id',  
              as: 'productDetails',
            }
          },
          {
            $unwind: '$productDetails', 
          },
          {
            $project: {
              totalRevenue: {
                $multiply: ['$productDetails.totalPrice', '$quantity'], 
              }
            }
          },
          {
            $group: {
              _id: null,
              totalRevenue: { $sum: '$totalRevenue' }, 
            }
          }
        ]);
    
        
     return totalRevenue[0]?.totalRevenue || 0;
    
  };
  

export const orderService = {
    createOrder,
    revenueProduct
}