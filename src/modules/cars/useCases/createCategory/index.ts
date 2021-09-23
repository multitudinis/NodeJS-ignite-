import { CategoriesRepository } from "../../respositories/implementations/categories.repository";
import { CreateCategoryController } from "./createCategoryController";
import { createCategoryUseCase } from "./createCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance()
const CreateCategoryUseCase = new createCategoryUseCase(categoriesRepository)
const createCategoryController = new CreateCategoryController(CreateCategoryUseCase)

export {createCategoryController}