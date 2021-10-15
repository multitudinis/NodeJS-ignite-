"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Car = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var category_1 = require("./category");
var Car = /** @class */ (function () {
    function Car() {
        this.available = true;
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn()
    ], Car.prototype, "id");
    __decorate([
        typeorm_1.Column()
    ], Car.prototype, "name");
    __decorate([
        typeorm_1.Column()
    ], Car.prototype, "description");
    __decorate([
        typeorm_1.Column()
    ], Car.prototype, "daily_rate");
    __decorate([
        typeorm_1.Column('boolean', { "default": true })
    ], Car.prototype, "available");
    __decorate([
        typeorm_1.Column()
    ], Car.prototype, "license_plate");
    __decorate([
        typeorm_1.Column()
    ], Car.prototype, "fine_amount");
    __decorate([
        typeorm_1.Column()
    ], Car.prototype, "brand");
    __decorate([
        typeorm_1.ManyToOne(function () { return category_1.Category; }),
        typeorm_1.JoinColumn({ name: "category_id" })
    ], Car.prototype, "category");
    __decorate([
        typeorm_1.Column()
    ], Car.prototype, "category_id");
    __decorate([
        typeorm_1.CreateDateColumn()
    ], Car.prototype, "created_at");
    Car = __decorate([
        typeorm_1.Entity()
    ], Car);
    return Car;
}());
exports.Car = Car;
