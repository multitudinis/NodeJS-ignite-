"use strict";
exports.__esModule = true;
exports.categoriesRoutes = void 0;
var express_1 = require("express");
var multer_1 = require("multer");
var createCategoryController_1 = require("../../../../modules/cars/useCases/createCategory/createCategoryController");
var listCategoriesController_1 = require("../../../../modules/cars/useCases/listCategories/listCategoriesController");
var importCategoryController_1 = require("../../../../modules/cars/useCases/importCategory/importCategoryController");
var ensureAuthenticated_1 = require("../middleware/ensureAuthenticated");
var ensureAdmin_1 = require("../middleware/ensureAdmin");
var categoriesRoutes = express_1.Router();
exports.categoriesRoutes = categoriesRoutes;
var upload = multer_1["default"]({
    dest: "./tmp"
});
var createCategoryController = new createCategoryController_1.CreateCategoryController();
var ImportCategoryController = new importCategoryController_1.importCategoryController();
var ListCategoriesController = new listCategoriesController_1.listCategoriesController();
categoriesRoutes.post("/", ensureAuthenticated_1.ensureAuthenticated, ensureAdmin_1.ensureAdmin, createCategoryController.handle);
categoriesRoutes.get("/", ListCategoriesController.handle);
categoriesRoutes.post("/import", upload.single("file"), ImportCategoryController.handle);
