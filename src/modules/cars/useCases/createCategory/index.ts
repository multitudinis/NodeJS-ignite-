/*import { CategoriesRepository } from "../../respositories/implementations/categories.repository";
import { CreateCategoryController } from "./createCategoryController";
import { createCategoryUseCase } from "./createCategoryUseCase";

export default(): CreateCategoryController => {
    
    const categoriesRepository = new CategoriesRepository()
    const CreateCategoryUseCase = new createCategoryUseCase(categoriesRepository)
    const createCategoryController = new CreateCategoryController(CreateCategoryUseCase)

    return createCategoryController
}*/