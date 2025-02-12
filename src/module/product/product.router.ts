import { Router } from "express";
import { productController } from "./product.controller";

const router = Router()

router.post('/create-product', productController.createProduct)
router.get('/', productController.getProduct)
router.get('/:productId', productController.getSingleProduct)
router.put('/:productId', productController.updateProduct)
router.delete("/:productId", productController.deleteProduct)

export const productRoutes = router