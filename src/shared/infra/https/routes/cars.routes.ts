import { Router } from "express"
import { createCarController } from "../../../../modules/cars/useCases/createCar/createCarController"
import { listAvailableCarsController } from "../../../../modules/cars/useCases/listAvailableCars/listAvailableCarsController"
import { ensureAdmin } from "../middleware/ensureAdmin"
import { ensureAuthenticated } from "../middleware/ensureAuthenticated"


const carsRoutes = Router()
const CreateCarController = new createCarController()
const ListAvailableCarsController = new listAvailableCarsController()

carsRoutes.post("/", 
ensureAuthenticated,
ensureAdmin,
CreateCarController.handle)

carsRoutes.get("/available", ListAvailableCarsController.handle)

export { carsRoutes }