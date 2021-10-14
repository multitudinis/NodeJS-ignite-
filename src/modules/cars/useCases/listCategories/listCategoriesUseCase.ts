import { inject, injectable } from "tsyringe";
import { Category } from "../../infra/typeorm/entities/category";
import { ICategoriesRepository } from "../../infra/typeorm/respositories/ICategoriesRepository";

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