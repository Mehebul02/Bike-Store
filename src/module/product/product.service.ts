import QueryBuilder from "../../app/builder/QueryBuilder";
import { productSearchableFields } from "./product.constants";
import IProduct from "./product.interface";
import Product from "./product.model";


const createProduct = async (payload: IProduct): Promise<IProduct> => {


    try {
        const result = await Product.create(payload)
        return result;
    } catch (error) {
        console.log(error);
        throw new Error("Product creation failed"); 
    }
}

const sanitizeQuery = (query: Record<string, unknown>) => {
    Object.keys(query).forEach((key) => {
      if (typeof query[key] === 'string') {
        // Remove newline characters and trim extra spaces
        query[key] = query[key].replace(/\n/g, '').trim();
      }
    });
  }

const getProduct = async (query: Record<string, unknown>) => {
    sanitizeQuery(query)
    console.log("All product", query);

    const productQuery =new QueryBuilder(Product.find(), query)
    .search(productSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();
    const meta = await  productQuery.countTotal()
    const result = await productQuery.modelQuery
    return {meta,result}

   
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