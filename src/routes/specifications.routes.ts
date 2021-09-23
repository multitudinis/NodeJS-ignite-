import { Router } from "express";
import { SpecificationsRepository } from "../modules/cars/respositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification";


const specificationsRoutes = Router()
const specificationsRepository =  new SpecificationsRepository()

specificationsRoutes.post("/", (request, response) => {
    return CreateSpecificationController.handle(request, response)
})

export {specificationsRoutes}