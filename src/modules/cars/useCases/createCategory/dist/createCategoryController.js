"use strict";
exports.__esModule = true;
exports.CreateCategoryController = void 0;
var CreateCategoryController = /** @class */ (function () {
    function CreateCategoryController(CreateCategoryUseCase) {
        this.CreateCategoryUseCase = CreateCategoryUseCase;
    }
    CreateCategoryController.prototype.handle = function (request, response) {
        var _a = request.body, name = _a.name, description = _a.description;
        this.CreateCategoryUseCase.execute({ name: name, description: description });
        return response.status(201).send();
    };
    return CreateCategoryController;
}());
exports.CreateCategoryController = CreateCategoryController;
