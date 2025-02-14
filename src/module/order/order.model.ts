import { model, Schema } from "mongoose";

const OderSchema = new Schema({
    email: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
}, { timestamps: true });


const Order = model("Oder", OderSchema)

export default Order
