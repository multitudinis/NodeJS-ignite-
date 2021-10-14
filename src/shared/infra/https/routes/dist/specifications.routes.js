"use strict";
exports.__esModule = true;
exports.specificationsRoutes = void 0;
var express_1 = require("express");
var SpecificationRepository_1 = require("../modules/cars/respositories/implementations/SpecificationRepository");
var createSpecification_1 = require("../modules/cars/useCases/createSpecification");
var specificationsRoutes = express_1.Router();
exports.specificationsRoutes = specificationsRoutes;
var specificationsRepository = new SpecificationRepository_1.SpecificationsRepository();
specificationsRoutes.post("/", function (request, response) {
    return createSpecification_1.CreateSpecificationController.handle(request, response);
});
