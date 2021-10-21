import { Router } from "express";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { createSpecificationController } from "../../../../modules/cars/useCases/createSpecification/createSpecificationController";
import { ensureAdmin } from "../middleware/ensureAdmin";


const specificationsRoutes = Router()
const CreateSpecificationController = new createSpecificationController()

specificationsRoutes.use(ensureAuthenticated)
specificationsRoutes.post("/", ensureAdmin, CreateSpecificationController.handle)

export {specificationsRoutes}