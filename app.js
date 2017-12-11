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
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
myMultiply(12, 23);
//object
var userData = {
    name: 'Kyrongho',
    age: 27
};
// userData = {a:"s", b:23};
userData = { name: "s", age: 23 };
//complex object 
var complex = {
    data: [100, 200, 333],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 200, 333],
    output: function (all) {
        return this.data;
    }
};
//union type
var myRealRealAge = 27;
myRealRealAge = "35";
//check types;
var finalValue = "A string";
if (typeof finalValue == "string") {
    console.log("finalvalue is  string!");
}
// never 
function naverReturn() {
    throw new Error('An error');
}
//Nullable Types 
var canNullable = 12;
canNullable = null;
var canAlsoBeNull = null;
canAlsoBeNull = 213;
