import {Request, Response } from "express";
import { productService } from "./product.service";


const createProduct= async (req:Request, res:Response)=>{

 try{
    const payload = req.body
    const result = await productService.createProduct(payload)
    res.json({
        success: true,
        message: "Bike created successfully",
        data: result
    })
 }
 catch(error){
    res.json({
        status:false,
        message:"Validation failed",
        error
    })
 }
   

}


export const productController = {
    createProduct
}