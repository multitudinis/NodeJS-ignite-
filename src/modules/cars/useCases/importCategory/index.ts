import { CategoriesRepository } from "../../respositories/implementations/categories.repository";
import { importCategoryController } from "./importCategoryController";
import { importCategoryUseCase } from "./importCategoryUseCase";

export default():importCategoryController => {

    const categoriesRepository = new CategoriesRepository()
    const ImportCategoryUseCase = new importCategoryUseCase(categoriesRepository)
    const ImportCategoryController = new importCategoryController(ImportCategoryUseCase)
    
    return ImportCategoryController
}