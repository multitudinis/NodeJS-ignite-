import { Request, Response } from "express";
import { listCategoriesUseCase } from "./listCategoriesUseCase";

class listCategoriesController {
    constructor(private ListCategoriesUseCase: listCategoriesUseCase){}
    handle(request: Request, response:Response): Response{
        const all = this.ListCategoriesUseCase.execute()
        return response.json(all)
    }
}

export {listCategoriesController}