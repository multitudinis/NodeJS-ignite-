"use strict";
exports.__esModule = true;
exports.listCategoriesUseCase = void 0;
var listCategoriesUseCase = /** @class */ (function () {
    function listCategoriesUseCase(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    listCategoriesUseCase.prototype.execute = function () {
        var categories = this.categoriesRepository.list();
        return categories;
    };
    return listCategoriesUseCase;
}());
exports.listCategoriesUseCase = listCategoriesUseCase;
