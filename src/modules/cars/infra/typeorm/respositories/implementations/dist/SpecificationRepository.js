"use strict";
exports.__esModule = true;
exports.SpecificationsRepository = void 0;
var Specification_1 = require("../../entities/Specification");
var SpecificationsRepository = /** @class */ (function () {
    function SpecificationsRepository() {
        this.Specifications = [];
    }
    SpecificationsRepository.prototype.create = function (_a) {
        var description = _a.description, name = _a.name;
        var specification = new Specification_1.Specification();
        Object.assign(specification, {
            name: name,
            description: description,
            created_at: new Date()
        });
        this.Specifications.push(specification);
        //  throw new Error("Method not implemented.")
    };
    SpecificationsRepository.prototype.findByName = function (name) {
        var specification = this.Specifications.find(function (specification) { return specification.name === name; });
        return specification;
    };
    return SpecificationsRepository;
}());
exports.SpecificationsRepository = SpecificationsRepository;
