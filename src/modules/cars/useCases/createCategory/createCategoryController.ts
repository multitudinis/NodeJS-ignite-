import { Request, Response } from "express"
import 'reflect-metadata';
import { container } from "tsyringe"
import { createCategoryUseCase } from "./createCategoryUseCase"

class CreateCategoryController {

    async handle(request: Request, response: Response): Promise<Response>{
        const {name, description} = request.body
        
        const CreateCategoryUseCase = container.resolve(createCategoryUseCase)

        await CreateCategoryUseCase.execute({name, description})
    
        return response.status(201).send()
    }
}

export {CreateCategoryController}