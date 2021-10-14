import { Router } from "express";
import multer from "multer";
import uploadConfig from "../../../../config/upload";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/createUserController";
import { updateUserAvatarController } from "../../../../modules/accounts/useCases/updateUserAvatar/updateUserAvatarController";

const userRouter = Router()
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))
const createUserController = new CreateUserController()
const UpdateUserAvatarController = new updateUserAvatarController()

userRouter.post("/", createUserController.handle)
userRouter.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar"),
UpdateUserAvatarController.handle)

export {userRouter}