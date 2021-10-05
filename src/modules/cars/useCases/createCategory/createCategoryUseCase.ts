import { inject, injectable } from "tsyringe";
import { ICategoriesRepository } from "../../respositories/ICategoriesRepository";

interface IRequest {
    name: string
    description: string
}

@injectable()
class createCategoryUseCase{
    constructor (
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository){}
    
    async execute({description, name}: IRequest):Promise <void> {
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name)
        if(categoryAlreadyExists){
            throw new Error("Category already exists!")
        }
        this.categoriesRepository.create({name, description})
    }
}
export {createCategoryUseCase}