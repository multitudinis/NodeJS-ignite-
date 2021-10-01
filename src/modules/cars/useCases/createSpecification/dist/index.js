"use strict";
exports.__esModule = true;
exports.CreateSpecificationController = void 0;
var createSpecificationController_1 = require("./createSpecificationController");
var createSpecificationUseCase_1 = require("./createSpecificationUseCase");
var SpecificationRepository_1 = require("../../respositories/implementations/SpecificationRepository");
var specificationsRepository = new SpecificationRepository_1.SpecificationsRepository();
var createSpecificationUseCase = new createSpecificationUseCase_1.CreateSpecificationUseCase(specificationsRepository);
var CreateSpecificationController = new createSpecificationController_1.createSpecificationController(createSpecificationUseCase);
exports.CreateSpecificationController = CreateSpecificationController;