import { ICategoriesRepository } from "../../respositories/ICategoriesRepository";

interface IRequest {
    name: string
    description: string
}

class createCategoryUseCase{
    constructor (private categoriesRepository: ICategoriesRepository){}
    
    execute({description, name}: IRequest):void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(name)
        if(categoryAlreadyExists){
            throw new Error("Category already exists!")
        }
        this.categoriesRepository.create({name, description})
    }
}
export {createCategoryUseCase}