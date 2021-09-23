"use strict";
exports.__esModule = true;
exports.importCategoryController = void 0;
var importCategoryController = /** @class */ (function () {
    function importCategoryController(ImportCategoryUseCase) {
        this.ImportCategoryUseCase = ImportCategoryUseCase;
    }
    importCategoryController.prototype.handle = function (request, response) {
        var file = request.file;
        this.ImportCategoryUseCase.execute(file);
        return response.send();
    };
    return importCategoryController;
}());
exports.importCategoryController = importCategoryController;
