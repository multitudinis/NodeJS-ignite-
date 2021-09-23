import { CategoriesRepository } from "../../respositories/implementations/categories.repository";
import { importCategoryController } from "./importCategoryController";
import { importCategoryUseCase } from "./importCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance()
const ImportCategoryUseCase = new importCategoryUseCase(categoriesRepository)
const ImportCategoryController = new importCategoryController(ImportCategoryUseCase)

export {ImportCategoryController}