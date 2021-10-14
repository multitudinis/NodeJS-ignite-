import { Router } from "express";

import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.routes";
import { userRouter } from "./users.routes";
import { authRoutes } from "./authentication.routes";

const router = Router()

router.use("/categories", categoriesRoutes)
router.use("/specifications", specificationsRoutes)
router.use("/users", userRouter)
router.use(authRoutes)

export {router}