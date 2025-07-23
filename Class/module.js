"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calc_1 = require("./calc");
var calc = new calc_1.Calculator();
console.log(calc.add(1, 5));
console.log(calc.subtract(5, 2));
console.log((0, calc_1.multiply)(4, 5));
