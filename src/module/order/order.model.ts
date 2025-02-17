import { model, Schema, Types } from "mongoose";

const OderSchema = new Schema({
    email: { type: String, required: true },
    product: { type: Types.ObjectId, required: true, ref:"Product" },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
}, { timestamps: true });


const Order = model("Order", OderSchema); // Fix model name
export default Order;
