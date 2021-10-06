import { Request, Response } from "express"
import { container } from "tsyringe"
import { importCategoryUseCase } from "./importCategoryUseCase"

class importCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request
        const ImportCategoryUseCase = container.resolve(importCategoryUseCase)
        await ImportCategoryUseCase.execute(file)

        return response.status(201).send()
    }
}

export { importCategoryController }