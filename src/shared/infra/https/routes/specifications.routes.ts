import { Router } from "express";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { createSpecificationController } from "../../../../modules/cars/useCases/createSpecification/createSpecificationController";


const specificationsRoutes = Router()
const CreateSpecificationController = new createSpecificationController()

specificationsRoutes.use(ensureAuthenticated)
specificationsRoutes.post("/", CreateSpecificationController.handle)

export {specificationsRoutes}