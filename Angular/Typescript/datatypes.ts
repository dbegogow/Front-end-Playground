/*
Data Types:
 - string
 - number;
 - boolean;
 - array;
 - enum;
 - tuple;
 - any;
 - void;
 - never;
*/

let lname: string;

lname = "Dzhulio";
let newname = lname.toUpperCase();

console.log(newname);

let age: number;
age = 25;
age = 25.5;

let dob = "25";

let result = parseInt(dob);

let isValid: boolean = false;

console.log(isValid);

let emptyList: string[];
emptyList = ["Dzhulio", "Dzhulio1", "Dzhulio2"]

let numList: Array<number>;
numList = [1, 2, 3, 4, 5];

let newNum = numList[0];

let results = numList.filter((num) => num > 2);

let num = numList.find((num) => num == 2);

let sum = numList.reduce((acc, num) => acc + num);

console.log(results);
console.log(num);
console.log(sum);

const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Blue;

let swapNumbs: [number, number];

function swapNumbers(num1: number, num2: number): [number, number] {
    return [num2, num1];
}

swapNumbs = swapNumbers(10, 20);

swapNumbs[0];
swapNumbs[1];

let department: any;

department = "IT";
department = 10;
/*not use any type */