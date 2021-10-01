"use strict";
exports.__esModule = true;
var categories_repository_1 = require("../../respositories/implementations/categories.repository");
var createCategoryController_1 = require("./createCategoryController");
var createCategoryUseCase_1 = require("./createCategoryUseCase");
exports["default"] = (function () {
    var categoriesRepository = new categories_repository_1.CategoriesRepository();
    var CreateCategoryUseCase = new createCategoryUseCase_1.createCategoryUseCase(categoriesRepository);
    var createCategoryController = new createCategoryController_1.CreateCategoryController(CreateCategoryUseCase);
    return createCategoryController;
});
