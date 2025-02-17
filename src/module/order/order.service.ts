
import { IOrder } from "./order.interface";
import Order from "./order.model";

const createOrder = async (payload: IOrder): Promise<IOrder> => {
    const result = await Order.create(payload)
    return result
}



const revenueProduct = async () => {


  const totalRevenue = await Order.aggregate([
    {
      $lookup: {
        from: "products", // Ensure this matches your DB collection name
        localField: "product",
        foreignField: "_id",
        as: "productDetails",
      },
    },
    { $unwind: "$productDetails" },
    {
      $project: {
        totalRevenue: { $multiply: ["$productDetails.price", "$quantity"] },
      },
    },
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$totalRevenue" },
      },
    },
  ]);
  
  return totalRevenue[0]?.totalRevenue || 0;

  return totalRevenue[0]?.totalRevenue || 0;
console.log("Total",totalRevenue);


    
  };
  

export const orderService = {
    createOrder,
    revenueProduct
}