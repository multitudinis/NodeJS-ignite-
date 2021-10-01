import { Request, Response } from "express";
import { listCategoriesUseCase } from "./listCategoriesUseCase";

class listCategoriesController {
    constructor(private ListCategoriesUseCase: listCategoriesUseCase){}
    async handle(request: Request, response:Response): Promise<Response>{
        const all = await this.ListCategoriesUseCase.execute()
        return response.json(all)
    }
}

export {listCategoriesController}