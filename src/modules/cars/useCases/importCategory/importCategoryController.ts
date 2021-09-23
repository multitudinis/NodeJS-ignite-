import { Request, Response } from "express"
import { importCategoryUseCase } from "./importCategoryUseCase"

class importCategoryController{
    constructor(private ImportCategoryUseCase: importCategoryUseCase){}
    handle (request: Request, response: Response): Response{
        const {file} = request
        
        this.ImportCategoryUseCase.execute(file)

        return response.send()
    }
}

export {importCategoryController}