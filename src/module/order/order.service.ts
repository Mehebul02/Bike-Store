import { IOrder } from "./order.interface";
import Oder from "./order.model";



const createOrder = async (payload: IOrder): Promise<IOrder> => {
    const result = await Oder.create(payload)
    return result
}


export const orderService = {
    createOrder
}