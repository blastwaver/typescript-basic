
//string
let myName: string = 'Kyeongho';

//number
let myAge: number = 27;

let hasHobbies: boolean = false;
// hasHobbies = 1;

//assign types
let myReaelAge: number;
myReaelAge = 35;
//myRealAge = '35';

//array
let hobbies:any[] = ['cooing','fishing','sport'];
// hobbies =[100];

console.log(typeof hobbies);

//tuples
let address: [string, number] = ["1406 Sixth Line", 99];

//enum
enum Color {
    Gray, //0
    Green = 100, //100
    Blue //2
}

let myColor: Color = Color.Blue;
console.log(myColor);   


//any
let car: any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car);

function returnMyName(): string {
    return myName;
}

function sayHello(): void {
    console.log("hello");
}
console.log(returnMyName());
sayHello();

//argument types
function multiply(value1: number, value2: number):number {
    return value1 * value2;
}

// console.log(multiply(2,'max'));
console.log(multiply(2,10));

//function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
myMultiply(12,23);

//object
let userData:{name:string, age:number} = {
    name: 'Kyrongho',
    age: 27
};
// userData = {a:"s", b:23};
userData = {name:"s", age:23};

//complex object 
    let complex: {data: number[], output:(all:boolean) => number[]} = {
        data:[100, 200, 333],
        output: function(all: boolean): number[] {
            return this.data;
        }
    }

// complex = {data:[123,123], output:function(a){return [234,234]}};


//type alias
type Complex = {data: number[], output:(all:boolean) => number[]};

let complex2:Complex = {
    data:[100, 200, 333],
    output: function(all: boolean): number[] {
        return this.data;
    }
}

//union type
let myRealRealAge: number | string = 27;
myRealRealAge = "35";

//check types;
let finalValue = "A string";
if (typeof finalValue == "string") {
    console.log("finalvalue is  string!");  
}

// never 
function naverReturn(): never {
    throw new Error('An error');
}

//Nullable Types 
let canNullable: number | null = 12;
canNullable = null;
let canAlsoBeNull = null;
canAlsoBeNull = 213;


//practice
type BankAccount = {money:number, deposit:(value:number)=> void};

let bankAccount:BankAccount = {
    money:2000,
    deposit(value: number) {
        this.money += value;
    }
};

let myself:{ name: string, bankAccount:BankAccount , hobbies: string[]} = {
    name: "Kyeongho",
    bankAccount: bankAccount,
    hobbies: ["Sport", "Cooking"] 
};

myself.bankAccount.deposit(3000);
console.log(myself);


let aaa = "sss";

let sdfsdf = function () {
    // console.log(aaa);
    let aaa ="222";

   console.log(aaa);
}

sdfsdf();