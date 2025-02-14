import { Router } from "express";
import { UserValidation } from "../user/userValidation";
import validateRequest from "../../app/middleWares/validateRequest";
import { AuthControllers } from "./auth.controller";
import { AuthValidation } from "./auth.validation";


const router = Router()

router.post('/register', validateRequest(UserValidation.userValidationSchema), AuthControllers.register);
router.post('/login', validateRequest(AuthValidation.loginValidationSchema), AuthControllers.login);
router.post("/forget-password", validateRequest(AuthValidation.forgetPasswordValidationSchema) ,AuthControllers.forgetPassword)
router.post("/reset-password" ,AuthControllers.resetPassword)


export const  authRouter = router