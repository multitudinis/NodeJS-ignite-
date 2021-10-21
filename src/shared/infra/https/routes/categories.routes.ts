import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../../../../modules/cars/useCases/createCategory/createCategoryController";
import { listCategoriesController } from "../../../../modules/cars/useCases/listCategories/listCategoriesController";
import { importCategoryController } from "../../../../modules/cars/useCases/importCategory/importCategoryController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { ensureAdmin } from "../middleware/ensureAdmin";

const categoriesRoutes = Router()
const upload = multer({
    dest: "./tmp",
})

const createCategoryController = new CreateCategoryController()
const ImportCategoryController = new importCategoryController()
const ListCategoriesController = new listCategoriesController()

categoriesRoutes.post("/", ensureAuthenticated, ensureAdmin, createCategoryController.handle)

categoriesRoutes.get("/", ListCategoriesController.handle)

categoriesRoutes.post("/import", upload.single("file"),
 ImportCategoryController.handle)

export {categoriesRoutes}