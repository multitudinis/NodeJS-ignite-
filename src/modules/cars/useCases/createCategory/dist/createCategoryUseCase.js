"use strict";
exports.__esModule = true;
exports.createCategoryUseCase = void 0;
var createCategoryUseCase = /** @class */ (function () {
    function createCategoryUseCase(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    createCategoryUseCase.prototype.execute = function (_a) {
        var description = _a.description, name = _a.name;
        var categoryAlreadyExists = this.categoriesRepository.findByName(name);
        if (categoryAlreadyExists) {
            throw new Error("Category already exists!");
        }
        this.categoriesRepository.create({ name: name, description: description });
    };
    return createCategoryUseCase;
}());
exports.createCategoryUseCase = createCategoryUseCase;
