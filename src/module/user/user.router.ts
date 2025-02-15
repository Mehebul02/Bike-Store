import { NextFunction, Request, Response, Router } from "express";
import validateRequest from "../../app/middleWares/validateRequest";
import { UserValidation } from "./userValidation";
import { userController } from "./user.controller";
import { USER_ROLE } from "./user.constants";
import auth from "../../app/middleWares/auth";
import { createAdminValidationSchema } from "../admin/admin.validation";

const router = Router()

router.post('/create-admin',auth(USER_ROLE.user, USER_ROLE.admin),
    // upload.single('file'),
    (req: Request, res: Response, next: NextFunction) => {
      req.body = JSON.parse(req.body.data);
      next();
    },
    validateRequest(createAdminValidationSchema),
    userController.createAdmin,
  );
router.post('/create-user', validateRequest(UserValidation.userValidationSchema), userController.createUser)
router.get('/:userId', userController.getSingleUser)
router.put('/:userId', userController.updateUser)
router.delete('/:userId', userController.deleteUser)
router.get('/',auth(USER_ROLE.admin, USER_ROLE.user), userController.getUser)


export const userRoutes = router