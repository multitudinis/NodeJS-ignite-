import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory";

const categoriesRoutes = Router()
const upload = multer({
    dest: "./tmp",
})

categoriesRoutes.post("/", (request, response) => {
   return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/", (request, response) => {
    return ListCategoriesController.handle(request, response)
})

categoriesRoutes.post("/import", upload.single("file"), (request, response)=>{
    return ImportCategoryController.handle(request, response)
})

export {categoriesRoutes}