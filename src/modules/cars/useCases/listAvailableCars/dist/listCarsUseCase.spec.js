"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var carsRepositoryInMemory_1 = require("../../infra/typeorm/respositories/inMemory/carsRepositoryInMemory");
var listCarsUseCase_1 = require("./listCarsUseCase");
var ListCars;
var carsRepositoryInMemory;
describe("should list cars", function () {
    beforeEach(function () {
        carsRepositoryInMemory = new carsRepositoryInMemory_1.CarsRepositoryInMemory();
        ListCars = new listCarsUseCase_1.listCarsUseCase(carsRepositoryInMemory);
    });
    it("should be able to list all available cars", function () { return __awaiter(void 0, void 0, void 0, function () {
        var car, cars;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, carsRepositoryInMemory.create({
                        "name": "gtx",
                        "description": "4 rodas",
                        "daily_rate": 999,
                        "license_plate": "qq1-321",
                        "fine_amount": 2000,
                        "brand": "honda",
                        "category_id": "aeb67dd2-9af4-40c1-a395-0698c4b9f2b3"
                    })];
                case 1:
                    car = _a.sent();
                    return [4 /*yield*/, ListCars.execute({})];
                case 2:
                    cars = _a.sent();
                    console.log(cars);
                    expect(cars).toEqual([car]);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should be able to list all availables cars by brand", function () { return __awaiter(void 0, void 0, void 0, function () {
        var car, cars;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, carsRepositoryInMemory.create({
                        "name": "gtx2",
                        "description": "4 rodas",
                        "daily_rate": 999,
                        "license_plate": "qq1-321",
                        "fine_amount": 2000,
                        "brand": "honda2",
                        "category_id": "5be71d1c-6e75-4b04-aecd-1272960f5bf0"
                    })];
                case 1:
                    car = _a.sent();
                    return [4 /*yield*/, ListCars.execute({ brand: "honda2" })];
                case 2:
                    cars = _a.sent();
                    expect(cars).toEqual([car]);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should be able to list all availables cars by name", function () { return __awaiter(void 0, void 0, void 0, function () {
        var car, cars;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, carsRepositoryInMemory.create({
                        "name": "gtx3",
                        "description": "4 rodas",
                        "daily_rate": 999,
                        "license_plate": "qq1-322",
                        "fine_amount": 2000,
                        "brand": "honda3",
                        "category_id": "5be71d1c-6e75-4b04-aecd-1272960f5bf0"
                    })];
                case 1:
                    car = _a.sent();
                    return [4 /*yield*/, ListCars.execute({ name: "gtx3" })];
                case 2:
                    cars = _a.sent();
                    expect(cars).toEqual([car]);
                    return [2 /*return*/];
            }
        });
    }); });
});
