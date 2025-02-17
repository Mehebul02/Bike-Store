import { Router } from "express";
import { productController } from "./product.controller";
import validateRequest from "../../app/middleWares/validateRequest";
import productValidationSchema from "./product.validation";

const router = Router()

router.post('/create-product',validateRequest(productValidationSchema), productController.createProduct)
router.get('/', productController.getProduct)
router.get('/:productId', productController.getSingleProduct)
router.put('/:productId', productController.updateProduct)
router.delete("/:productId", productController.deleteProduct)

export const productRoutes = router