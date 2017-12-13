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
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        this.age = 32;
        this.setType("old guy");
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Kyeongho", "naky");
console.log(person.name, person.username);
person.printAge();
// person.setType("Hot guy");
//inheritance 
var Kyeongho = /** @class */ (function (_super) {
    __extends(Kyeongho, _super);
    // name = "Kyeongho";
    function Kyeongho(username) {
        var _this = _super.call(this, "xxx", username) || this;
        _this.age = 31;
        return _this;
    }
    return Kyeongho;
}(Person));
var max = new Kyeongho("naky");
console.log(max);
//Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
plant.species = "kkk";
console.log(plant.species);
