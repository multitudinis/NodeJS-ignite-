import { Request, Response } from "express"
import { importCategoryUseCase } from "./importCategoryUseCase"

class importCategoryController{
    constructor(private ImportCategoryUseCase: importCategoryUseCase){}
async handle (request: Request, response: Response): Promise<Response>{
        const {file} = request
        
        await this.ImportCategoryUseCase.execute(file)

        return response.send()
    }
}

export {importCategoryController}