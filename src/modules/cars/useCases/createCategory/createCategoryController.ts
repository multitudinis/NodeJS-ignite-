import { Request, Response } from "express"
import { createCategoryUseCase } from "./createCategoryUseCase"

interface IRequest {
    name: string
    description: string
}
class CreateCategoryController {
    
    constructor(private CreateCategoryUseCase: createCategoryUseCase){}

    async handle(request: Request, response: Response): Promise<Response>{
        const {name, description} = request.body
    
        await this.CreateCategoryUseCase.execute({name, description})
    
        return response.status(201).send()
    }
}

export {CreateCategoryController}