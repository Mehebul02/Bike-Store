import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AuthService } from "./auth.service";

const register = catchAsync(async(req, res)=>{
    const result = await AuthService.register(req.body);

    sendResponse(res,{
        statusCode: httpStatus.CREATED,
        success: true,
        message: "User registered successfully",
        data: result
    })
})
const login = catchAsync(async(req ,res)=>{
    const result = await AuthService.login(req.body);
    console.log( 'Token', result);
    sendResponse(res,{
        statusCode: httpStatus.ACCEPTED,
        success: true,
        message: "User logged in successfully",
        token: result?.token,
        data: result?.user
    })
})

// const forgetPassword = catchAsync(async(req, res)=>{
//     const result = await AuthService.forgetPassword(req.body);

//     sendResponse(res,{
//         statusCode: httpStatus.ACCEPTED,
//         success: true,
//         message: "Password reset link sent to your email",
//         data: result
//     })
// })

// const resetPassword = catchAsync(async(req, res)=>{
//     const result = await AuthService.resetPassword(req.body);

//     sendResponse(res,{
//         statusCode: httpStatus.ACCEPTED,
//         success: true,
//         message: "password reset successfully",
//         data: result
//     })
// })




export const AuthControllers = {
    register,
    login,
    // forgetPassword,
    // resetPassword
}