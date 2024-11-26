import mongoose, { model, Schema } from "mongoose";

const OderSchema = new Schema({
    email: { type: String, required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
}, { timestamps: true });


const Oder = model("Oder", OderSchema)

export Oder