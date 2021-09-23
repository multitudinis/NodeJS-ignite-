"use strict";
exports.__esModule = true;
exports.listCategoriesController = void 0;
var listCategoriesController = /** @class */ (function () {
    function listCategoriesController(ListCategoriesUseCase) {
        this.ListCategoriesUseCase = ListCategoriesUseCase;
    }
    listCategoriesController.prototype.handle = function (request, response) {
        var all = this.ListCategoriesUseCase.execute();
        return response.json(all);
    };
    return listCategoriesController;
}());
exports.listCategoriesController = listCategoriesController;
