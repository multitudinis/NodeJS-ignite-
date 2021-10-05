import { inject, injectable } from "tsyringe";
import { Category } from "../../entities/category";
import { ICategoriesRepository } from "../../respositories/ICategoriesRepository";

@injectable()
class listCategoriesUseCase{
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository){}
    async execute(): Promise<Category[]> {
        const categories = await this.categoriesRepository.list()
        return categories
    }
}

export {listCategoriesUseCase}