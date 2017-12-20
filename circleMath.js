"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    var Circle;
    (function (Circle) {
        function calculateCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calculateCircumference = calculateCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
    var Tmp = /** @class */ (function (_super) {
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
