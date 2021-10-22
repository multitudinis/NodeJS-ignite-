import { Request, Response } from "express";
import { container } from "tsyringe";
import { listAvailableCarsUseCase } from "./listAvailableCarsUseCase";

class listAvailableCarsController{
    async handle(request: Request, response: Response){
        const {brand, name, category_id} = request.query
        const ListAvailableCarsUseCase = container.resolve(listAvailableCarsUseCase)
        const cars = await ListAvailableCarsUseCase.execute({
            brand: brand as string,
            name: name as string,
            category_id: category_id as string
        })
        return response.json(cars)
    }
}

export {listAvailableCarsController}