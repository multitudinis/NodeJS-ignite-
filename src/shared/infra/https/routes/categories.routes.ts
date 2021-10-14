import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../../../../modules/cars/useCases/createCategory/createCategoryController";
import { listCategoriesController } from "../../../../modules/cars/useCases/listCategories/listCategoriesController";
import { importCategoryController } from "../../../../modules/cars/useCases/importCategory/importCategoryController";

const categoriesRoutes = Router()
const upload = multer({
    dest: "./tmp",
})

const createCategoryController = new CreateCategoryController()
const ImportCategoryController = new importCategoryController()
const ListCategoriesController = new listCategoriesController()

categoriesRoutes.post("/", createCategoryController.handle)

categoriesRoutes.get("/", ListCategoriesController.handle)

categoriesRoutes.post("/import", upload.single("file"),
 ImportCategoryController.handle)

export {categoriesRoutes}