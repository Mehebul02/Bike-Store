import IProduct from "./product.interface";
import Product from "./product.model";


const createProduct = async (payload: IProduct): Promise<IProduct> => {
  

    try {
         const result = await Product.create(payload)
        return result;
    } catch (error) {
        // Handle validation errors & DB errors
        console.error("Error creating product:", error);
        throw new Error("Product creation failed"); // Customize error message
    }
}

const getProduct = async () => {
    const result = await Product.find()
    return result
}

const getSingleProduct = async (id: string) => {
    const result = await Product.findById(id)
    return result
}

const updateProduct = async (id: string, data: IProduct) => {
    const result = await Product.findByIdAndUpdate(id, data, { new: true, updatedAt: new Date() })
    return result
}

const deleteProduct = async (id: string) => {
    const result = await Product.findByIdAndDelete(id)
    return result
}


export const productService = {
    createProduct,
    getProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}