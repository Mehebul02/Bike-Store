import IProduct from "./product.interface";
import Product from "./product.model";


const createProduct = async (payload: IProduct): Promise<IProduct> => {
    const result = await Product.create(payload)
    return result
}

const getProduct = async () => {
    const result = await Product.find()
    return result
}

const getSingleProduct = async (id: string) => {
    const result = await Product.findById(id)
    return result
}


export const productService = {
    createProduct,
    getProduct,
    getSingleProduct
}