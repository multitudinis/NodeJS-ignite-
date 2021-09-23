import { listCategoriesController } from "./listCategoriesController";
import { listCategoriesUseCase } from "./listCategoriesUseCase";
import { CategoriesRepository } from "../../respositories/implementations/categories.repository";

const categoriesRepository = CategoriesRepository.getInstance()
const ListCategoriesUseCase = new listCategoriesUseCase(categoriesRepository)
const ListCategoriesController = new listCategoriesController(ListCategoriesUseCase)

export {ListCategoriesController}