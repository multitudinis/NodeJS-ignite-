"use strict";
exports.__esModule = true;
exports.Especification = void 0;
var uuid_1 = require("uuid");
var Especification = /** @class */ (function () {
    function Especification() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    return Especification;
}());
exports.Especification = Especification;
