"use strict";
//string
var myName = 'Kyeongho';
//number
var myAge = 27;
var hasHobbies = false;
// hasHobbies = 1;
//assign types
var myReaelAge;
myReaelAge = 35;
//myRealAge = '35';
//array
var hobbies = ['cooing', 'fishing', 'sport'];
// hobbies =[100];
console.log(typeof hobbies);
//tuples
var address = ["1406 Sixth Line", 99];
//enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
//any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
function returnMyName() {
    return myName;
}
function sayHello() {
    console.log("hello");
}
console.log(returnMyName());
sayHello();
//argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2,'max'));
console.log(multiply(2, 10));
//function types
var myMultiply;
myMultiply = sayHello;
myMultiply();
myMultiply = multiply;
myMultiply(12, 23);
