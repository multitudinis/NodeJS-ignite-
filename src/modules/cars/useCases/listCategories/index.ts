import { listCategoriesController } from "./listCategoriesController";
import { listCategoriesUseCase } from "./listCategoriesUseCase";
import { CategoriesRepository } from "../../respositories/implementations/categories.repository";

export default():listCategoriesController => {
    
    const categoriesRepository = new CategoriesRepository()
    const ListCategoriesUseCase = new listCategoriesUseCase(categoriesRepository)
    const ListCategoriesController = new listCategoriesController(ListCategoriesUseCase)
    
    return ListCategoriesController
}
