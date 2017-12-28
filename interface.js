"use strict";
function greet(person) {
    console.log("Hello, " + person.firstName);
    console.log(person.whatever);
}
function changeName(person) {
    person.firstName = "Anna";
}
var persona = {
    firstName: "Max",
    age: 27,
    whatever: "sdaf",
    greet: function (lastname) {
        console.log("Hi, I am " + this.firstName + " " + lastname);
    }
};
// greet({firstName:"max" , age: 27});
// changeName(persona);
// greet(persona);
// persona.greet("Anithing");
var Personaa = /** @class */ (function () {
    function Personaa() {
    }
    Personaa.prototype.greet = function (lastname) {
        console.log("This is from class" + lastname);
    };
    return Personaa;
}());
var myPerson = new Personaa();
myPerson.firstName = "Kyeongho";
greet(myPerson);
myPerson.greet("Anything");
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return value1 + value2;
};
console.log(myDoubleFunction(12, 123));
var oldPerson = {
    age: 27,
    firstName: "naky",
    greet: function (lastname) {
        console.log(lastname);
    }
};
console.log(oldPerson);
