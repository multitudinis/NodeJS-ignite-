"use strict";
exports.__esModule = true;
exports.createSpecificationController = void 0;
var createSpecificationController = /** @class */ (function () {
    function createSpecificationController(createSpecificationUseCase) {
        this.createSpecificationUseCase = createSpecificationUseCase;
    }
    createSpecificationController.prototype.handle = function (request, response) {
        var _a = request.body, name = _a.name, description = _a.description;
        this.createSpecificationUseCase.execute({ name: name, description: description });
        return response.status(201).send();
    };
    return createSpecificationController;
}());
exports.createSpecificationController = createSpecificationController;
