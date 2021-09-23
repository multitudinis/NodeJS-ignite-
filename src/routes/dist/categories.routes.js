"use strict";
exports.__esModule = true;
exports.categoriesRoutes = void 0;
var express_1 = require("express");
var multer_1 = require("multer");
var createCategory_1 = require("../modules/cars/useCases/createCategory");
var listCategories_1 = require("../modules/cars/useCases/listCategories");
var importCategory_1 = require("../modules/cars/useCases/importCategory");
var categoriesRoutes = express_1.Router();
exports.categoriesRoutes = categoriesRoutes;
var upload = multer_1["default"]({
    dest: "./tmp"
});
categoriesRoutes.post("/", function (request, response) {
    return createCategory_1.createCategoryController.handle(request, response);
});
categoriesRoutes.get("/", function (request, response) {
    return listCategories_1.ListCategoriesController.handle(request, response);
});
categoriesRoutes.post("/import", upload.single("file"), function (request, response) {
    return importCategory_1.ImportCategoryController.handle(request, response);
});
