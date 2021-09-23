"use strict";
exports.__esModule = true;
var express_1 = require("express");
var routes_1 = require("./routes");
var app = express_1["default"]();
app.use(express_1["default"].json());
app.use(routes_1.router);
app.listen(9999, function () { return console.log("Server is running!"); });
