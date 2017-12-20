"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
    var Tmp = (function (_super) {
        __extends(Tmp, _super);
        function Tmp() {
            return _super.call(this) || this;
        }
        Tmp.sdfsafdsafs = function () {
            console.log("circle");
        };
        return Tmp;
    }(Object));
    MyMath.Tmp = Tmp;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
console.log(MyMath.calculateRectangle(19, 20));
console.log(MyMath.calculateCircumference(212));
// let tmp =  new MyMath.Tmp();
console.log(MyMath.Tmp.sdfsafdsafs());
