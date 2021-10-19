"use strict";
exports.__esModule = true;
require("reflect-metadata");
var express_1 = require("express");
require("express-async-errors");
var swagger_ui_express_1 = require("swagger-ui-express");
//import  createConnection  from "../typeorm"
require("../../container");
var routes_1 = require("./routes");
var swagger_json_1 = require("../../../swagger.json");
var appError_1 = require("../../errors/appError");
//createConnection()
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use("/api-docs", swagger_ui_express_1["default"].serve, swagger_ui_express_1["default"].setup(swagger_json_1["default"]));
app.use(routes_1.router);
app.use(function (err, request, response, next) {
    if (err instanceof appError_1.AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error - " + err.message
    });
});
app.listen(9999, function () { return console.log("Server is running!"); });
