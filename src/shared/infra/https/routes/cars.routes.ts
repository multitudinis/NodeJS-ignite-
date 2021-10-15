import { Router } from "express"
import { createCarController } from "../../../../modules/cars/useCases/createCar/createCarController"


const carsRoutes = Router()
const CreateCarController = new createCarController()

carsRoutes.post("/", CreateCarController.handle)

export { carsRoutes}