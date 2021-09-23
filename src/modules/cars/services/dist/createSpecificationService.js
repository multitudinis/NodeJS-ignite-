"use strict";
exports.__esModule = true;
exports.CreateSpecificationService = void 0;
var CreateSpecificationService = /** @class */ (function () {
    function CreateSpecificationService(specificationsRepository) {
        this.specificationsRepository = specificationsRepository;
    }
    CreateSpecificationService.prototype.execute = function (_a) {
        var name = _a.name, description = _a.description;
        var specificationAlreadyExists = this.specificationsRepository.findByName(name);
        if (specificationAlreadyExists) {
            throw new Error("Specification already exists!");
        }
        this.specificationsRepository.create({
            name: name,
            description: description
        });
    };
    return CreateSpecificationService;
}());
exports.CreateSpecificationService = CreateSpecificationService;
