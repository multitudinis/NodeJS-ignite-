"use strict";
exports.__esModule = true;
exports.specificationsRoutes = void 0;
var express_1 = require("express");
var ensureAuthenticated_1 = require("../middleware/ensureAuthenticated");
var createSpecificationController_1 = require("../../../../modules/cars/useCases/createSpecification/createSpecificationController");
var ensureAdmin_1 = require("../middleware/ensureAdmin");
var specificationsRoutes = express_1.Router();
exports.specificationsRoutes = specificationsRoutes;
var CreateSpecificationController = new createSpecificationController_1.createSpecificationController();
specificationsRoutes.use(ensureAuthenticated_1.ensureAuthenticated);
specificationsRoutes.post("/", ensureAdmin_1.ensureAdmin, CreateSpecificationController.handle);
