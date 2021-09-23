import { Request, Response } from "express"
import { createCategoryUseCase } from "./createCategoryUseCase"

interface IRequest {
    name: string
    description: string
}
class CreateCategoryController {
    
    constructor(private CreateCategoryUseCase: createCategoryUseCase){}

    handle(request: Request, response: Response): Response{
        const {name, description} = request.body
    
        this.CreateCategoryUseCase.execute({name, description})
    
        return response.status(201).send()
    }
}

export {CreateCategoryController}