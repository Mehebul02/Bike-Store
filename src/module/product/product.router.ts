import { Router } from "express";
import { productController } from "./product.controller";

const useRouter = Router()

useRouter.post('/create-product', productController.createProduct)
useRouter.get('/', productController.getProduct)
useRouter.get('/:productId', productController.getSingleProduct)
useRouter.put('/:productId', productController.updateProduct)

export default useRouter