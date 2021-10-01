import { Category } from "../../entities/category";
import { ICategoriesRepository } from "../../respositories/ICategoriesRepository";

class listCategoriesUseCase{
    constructor(private categoriesRepository: ICategoriesRepository){}
    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.list()
        return categories
    }
}

export {listCategoriesUseCase}