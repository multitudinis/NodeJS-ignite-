"use strict";
exports.__esModule = true;
exports.CreateCategoryService = void 0;
var CreateCategoryService = /** @class */ (function () {
    function CreateCategoryService(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    CreateCategoryService.prototype.execute = function (_a) {
        var description = _a.description, name = _a.name;
        var categoryAlreadyExists = this.categoriesRepository.findByName(name);
        if (categoryAlreadyExists) {
            throw new Error("Category already exists!");
        }
        this.categoriesRepository.create({ name: name, description: description });
    };
    return CreateCategoryService;
}());
exports.CreateCategoryService = CreateCategoryService;
