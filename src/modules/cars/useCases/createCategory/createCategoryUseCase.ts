import "reflect-metadata"
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/appError";
import { ICategoriesRepository } from "../../infra/typeorm/respositories/ICategoriesRepository";

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
            throw new AppError("Category already exists!")
        }
        this.categoriesRepository.create({name, description})
    }
}
export {createCategoryUseCase}