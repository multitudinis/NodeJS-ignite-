import { Category } from "../../model/category";
import { ICategoriesRepository } from "../../respositories/ICategoriesRepository";

class listCategoriesUseCase{
    constructor(private categoriesRepository: ICategoriesRepository){}
    execute(): Category[] {
        const categories = this.categoriesRepository.list()
        return categories
    }
}

export {listCategoriesUseCase}