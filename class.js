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
plant.species = "pink spider";
console.log(plant.species);
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.Pi * diameter;
    };
    Helpers.Pi = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.Pi);
// Anstaract classes
var project = /** @class */ (function () {
    function project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT project");
console.log(newProject);
//private constructors (for SINGLETON)
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne('The Only One');
var right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'Something else';
//practice
//Exercise 1 -class
var Car = /** @class */ (function () {
    function Car(name) {
        this.accerelatoin = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Bbaaaaaaaaaang!");
    };
    Car.prototype.accelerate = function (speed) {
        this.accerelatoin = this.accerelatoin + speed;
    };
    return Car;
}());
var ka = new Car('BMW');
ka.honk();
console.log(ka.accelerate);
ka.accelerate(20);
console.log(ka.accelerate);
//Exercise2 -Inheritance
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calSize());
//excercise3 
