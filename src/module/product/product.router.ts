import { Router } from "express";
import { productController } from "./product.controller";

const useRouter = Router()

useRouter.post('/create-product',productController.createProduct)

export default useRouter