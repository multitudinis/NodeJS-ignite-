"use strict";
exports.__esModule = true;
exports.carsRoutes = void 0;
var express_1 = require("express");
var createCarController_1 = require("../../../../modules/cars/useCases/createCar/createCarController");
var carsRoutes = express_1.Router();
exports.carsRoutes = carsRoutes;
var CreateCarController = new createCarController_1.createCarController();
carsRoutes.post("/", CreateCarController.handle);
