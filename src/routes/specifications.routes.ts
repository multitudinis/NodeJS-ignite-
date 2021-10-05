import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification/createSpecificationController";


const specificationsRoutes = Router()
const CreateSpecificationController = new createSpecificationController()

specificationsRoutes.post("/", CreateSpecificationController.handle)

export {specificationsRoutes}