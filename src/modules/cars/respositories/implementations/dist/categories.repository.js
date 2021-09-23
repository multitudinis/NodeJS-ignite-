"use strict";
exports.__esModule = true;
exports.CategoriesRepository = void 0;
var category_1 = require("../../model/category");
var CategoriesRepository = /** @class */ (function () {
    function CategoriesRepository() {
        this.categories = [];
    }
    CategoriesRepository.getInstance = function () {
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE;
    };
    CategoriesRepository.prototype.create = function (_a) {
        var name = _a.name, description = _a.description;
        var category = new category_1.Category();
        Object.assign(category, {
            name: name,
            description: description,
            created_at: new Date()
        });
        this.categories.push(category);
    };
    CategoriesRepository.prototype.list = function () {
        return this.categories;
    };
    CategoriesRepository.prototype.findByName = function (name) {
        var category = this.categories.find(function (Category) { return Category.name === name; });
        return category;
    };
    return CategoriesRepository;
}());
exports.CategoriesRepository = CategoriesRepository;
