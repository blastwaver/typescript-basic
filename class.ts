class Person {
    name: String;
    private type: string;
    protected age: number;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge(){
        this.age = 32;
        this.setType("old guy");
        console.log(this.age);
    }

    private setType(type: string) {
        this.type =  type;
        console.log(this.type);
    }
}


const person = new Person("Kyeongho", "naky");
console.log(person.name, person.username);
person.printAge();
// person.setType("Hot guy");


//inheritance 
class Kyeongho extends Person {
    // name = "Kyeongho";

    constructor(username: string) {
        super("xxx", username);
        this.age = 31;
    }
}

const max = new Kyeongho("naky");
console.log(max);

//Getters & Setters
class Plant {
    private _species: string = "default";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if(value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }
}

let plant = new Plant();
plant.species = "kkk";
console.log(plant.species);
plant.species = "pink spider";
console.log(plant.species);

class Helpers {
    static Pi:number = 3.14;
    static calcCircumference (diameter: number): number  {
        return this.Pi * diameter;
    }
}

console.log(2 * Helpers.Pi);

// Anstaract classes
abstract class project {
    projectName:String = "Default";
    budget: number = 1000;
    
    abstract changeName (name: string): void;

    calcBudget() {
        return this.budget * 2;

    }
}


class ITProject extends project {
    changeName(name: string): void{
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT project");
console.log(newProject);


//private constructors (for SINGLETON)
class OnlyOne{
    private static instance: OnlyOne;
    public readonly name: string;
    private constructor( name: string) {
        this.name = name;
    }

    static getInstance() {
        if(!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }

}

// let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'Something else';




//practice
//Exercise 1 -class
class Car{
    name:string;
    accerelatoin: number = 0;

    constructor(name: string) {
        this.name = name;       
    }

    honk() {
        console.log("Bbaaaaaaaaaang!");
    }

    accelerate(speed: number) {
        this.accerelatoin = this.accerelatoin + speed;
    }
}

const ka = new Car('BMW');
ka.honk();
console.log(ka.accelerate);
ka.accelerate(20);
console.log(ka.accelerate);

//Exercise2 -Inheritance
class BaseObject {
    width = 0;
    length = 0;
}

class Rectangle extends BaseObject {
    calSize() {
        return this.width * this.length;
    }
}

const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calSize());
