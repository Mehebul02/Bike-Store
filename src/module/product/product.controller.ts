import httpStatus from 'http-status';
import { productService } from "./product.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

const createProduct = catchAsync(async (req, res) => {
    const payload = req.body
    const result = await productService.createProduct(payload)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Bike created successfully',
        data: result,
    })

})

const getProduct = catchAsync(async (req, res) => {

    const result = await productService.getProduct(req.query)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Bikes are retrieved successfully',
        meta: result.meta,
        data: result.result,
      });

})


const getSingleProduct = catchAsync(async(req,res)=>{
    const {productId} = req.params
        const result = await productService.getSingleProduct(productId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Bikes are retrieved successfully',
        data: result
      });

})
const updateProduct = catchAsync(async(req,res)=>{
    const {productId} = req.params
    const body = req.body
    const result = await productService.updateProduct(productId, body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Bikes are updated successfully',
        data: result
      });

})


const deleteProduct = catchAsync(async(req,res)=>{
    const {productId} = req.params
    const result = await productService.deleteProduct(productId)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Bikes deleted successfully',
        data: result
      });

})


export const productController = {
    createProduct,
    getProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}