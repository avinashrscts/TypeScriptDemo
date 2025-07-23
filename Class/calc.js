"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
exports.multiply = multiply;
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
;
function multiply(a, b) {
    return a * b;
}
