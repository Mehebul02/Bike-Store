import { Request, Response } from "express";
import { productService } from "./product.service";


const createProduct = async (req: Request, res: Response) => {

    try {
        const payload = req.body
        const result = await productService.createProduct(payload)
        res.json({
            success: true,
            message: "Bike created successfully",
            data: result
        })
    }
    catch (error) {
        res.json({
            status: false,
            message: "Validation failed",
            error
        })
    }


}


const getProduct = async (req: Request, res: Response) => {
    try {
        const result = await productService.getProduct()
        res.json({
            status: true,
            message: "Bikes retrieved successfully",
            data: result
        })
    }
    catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error
        })
    }
}


const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId
        const result = await productService.getSingleProduct(productId)
        res.json({
            status: true,
            message: "Bike retrieved successfully",
            data: result
        })
    }
    catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error
        })
    }
}

const updateProduct = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId
        const body = req.body
        const result = await productService.updateProduct(productId, body)
        res.json({
            status: true,
            message: "Bike updated successfully",
            data: result
        })
    }
    catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error
        })
    }
}


const deleteProduct = async (req: Request, res: Response) => {
    try {
        const productId = req.params.productId
        const result = await productService.deleteProduct(productId)
        res.json({
            status: true,
            message: "Bike deleted successfully",
            data: result
        })
    }
    catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error
        })
    }
}


export const productController = {
    createProduct,
    getProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}