interface NamedPerson {
    firstName: string;
    age?: number,
    [propName: string]: any; 
    greet(lastname: string): void;
}

function  greet(person :NamedPerson){
    console.log("Hello, " + person.firstName);
    console.log(person.whatever);
}
    

function changeName(person:NamedPerson) {
    person.firstName = "Anna";
}

const persona: NamedPerson = {
    firstName: "Max",
    age: 27,
    whatever: "sdaf",
    greet(lastname: string) {
        console.log("Hi, I am " + this.firstName + " " + lastname);
    }
};

// greet({firstName:"max" , age: 27});
// changeName(persona);
// greet(persona);
// persona.greet("Anithing");

class Personaa implements NamedPerson {
    firstName: string;
    greet(lastname: string) {
        console.log("This is from class" + lastname);
    }
}

const myPerson = new Personaa();
myPerson.firstName = "Kyeongho";
greet(myPerson);
myPerson.greet("Anything");



//Fuction types
interface DoubleValueFunc {
    (number1: number, number2: number ): number;
}

let myDoubleFunction : DoubleValueFunc;

myDoubleFunction  = function (value1: number, value2: number) {
    return value1 + value2;
};

console.log(myDoubleFunction(12,123));

//Interface Inheritance

interface AgedPerson extends NamedPerson {
    age: number;
   
}

const oldPerson: AgedPerson = {
    age: 27,
    firstName: "naky",
    greet(lastname: string){
        console.log(lastname);
    }
};

console.log(oldPerson);