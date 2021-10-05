import { Request, Response } from "express";
import { container } from "tsyringe";
import { listCategoriesUseCase } from "./listCategoriesUseCase";

class listCategoriesController {

    async handle(request: Request, response:Response): Promise<Response>{
        const ListCategoriesUseCase = container.resolve(listCategoriesUseCase)
        const all = await ListCategoriesUseCase.execute()
        return response.json(all)
    }
}

export {listCategoriesController}