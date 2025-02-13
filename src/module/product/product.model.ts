// import { model, Schema } from "mongoose";


// const productSchema = new Schema({

//     name: { type: String, required: true },
//     brand: { type: String, required: true },
//     price: {type: Number, required: [true, "Price is required"],
//         min: [0, 'Price must be a positive number']
//     },
//     category: { type: String, enum: ["Mountain", "Road", "Hybrid", "Electric"], required: true },
//     description: { type: String, required: [true, "Category is required"] },
//     quantity: {
//         type: Number, required: [true, "Quantity is required"],
//         min: [1, "Quantity must be at least 1"]
//     },
//     inStock: { type: Boolean, required: true },


// }, {
//     timestamps: true,
// })

// const Product = model("Product", productSchema)

// export default Product


import { model, Schema } from "mongoose";

const productSchema = new Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { 
        type: Number, 
        required: [true, "Price is required"],
        min: [0, 'Price must be a positive number']
    },
    discountPrice: {
        type: Number,
        validate: {
            validator: function (value) {
                return value < this.price;
            },
            message: "Discount price must be lower than actual price",
        },
    },
    category: { type: String, required: true },
    description: { type: String, required: [true, "Description is required"] },
    quantity: {
        type: Number,
        required: [true, "Quantity is required"],
        min: [1, "Quantity must be at least 1"]
    },
    inStock: { type: Boolean, required: true },
    images: { type: [String], default: [] },
    // ratings: {
    //     type: Number,
    //     min: [0, "Rating must be at least 0"],
    //     max: [5, "Rating must be at most 5"],
    //     default: 0
    // },
    // reviews: [
    //     {
    //         user: { type: Schema.Types.ObjectId, ref: "User" },
    //         comment: String,
    //         rating: { type: Number, min: 0, max: 5 },
    //         createdAt: { type: Date, default: Date.now }
    //     }
    // ],
    slug: { type: String, unique: true },
    tags: { type: [String], default: [] }
}, {
    timestamps: true
});

const Product = model("Product", productSchema);

export default Product;
