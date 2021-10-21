import { Router } from "express"
import { createCarController } from "../../../../modules/cars/useCases/createCar/createCarController"
import { ensureAdmin } from "../middleware/ensureAdmin"
import { ensureAuthenticated } from "../middleware/ensureAuthenticated"


const carsRoutes = Router()
const CreateCarController = new createCarController()

carsRoutes.post("/", 
ensureAuthenticated,
ensureAdmin,
CreateCarController.handle)

export { carsRoutes }