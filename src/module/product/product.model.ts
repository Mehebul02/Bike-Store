import { model, Schema } from "mongoose";


const productSchema = new Schema({

    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: {
        type: Number, required: [true, "Price is required"],
        min: [0, 'Price must be a positive number']
    },
    category: { type: String, enum: ["Mountain", "Road", "Hybrid", "Electric"], required: true },
    description: { type: String, required: [true, "Category is required"] },
    quantity: {
        type: Number, required: [true, "Quantity is required"],
        min: [1, "Quantity must be at least 1"]
    },
    inStock: { type: Boolean, required: true },


}, {
    timestamps: true,
})

const Product = model("Product", productSchema)

export default Product