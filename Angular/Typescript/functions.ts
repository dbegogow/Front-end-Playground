/*
 - Different ways to write functions
 - Generic Functions
 - Optional Parameters
 - Required Parameters
 - Rest Parameters
*/

// named function
function add(num1: number, num2: number, num3?: number): number {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(add(2, 3));
console.log(add(2, 3, 5));

// arrow function
const sub = (num1: number, num2: number, num3 = 10): number => num1 - num2 - num3;

console.log(sub(2, 3));
console.log(sub(2, 3, 20));

// function expression
const mult = function (num1: number, num2: number): number {
    return num1 * num2;
};

console.log(mult(7, 2));

function add2(num1: number, num2: number, ...nums: number[]): number {
    return num1 + num2 + nums.reduce((a, b) => a + b, 0);
}

console.log(add2(2, 3, ...[5, 6, 7]));
console.log(add2(2, 3, 5, 6, 7, 10));

function getItems<Type>(items: Type[]): Type[] {
    return new Array<Type>().concat(items);
}

let concatResult = getItems([1, 2, 3, 4, 5]);
let concatString = getItems<string>(["a", "b", "c", "d", "e"]);

console.log(concatResult);
console.log(concatString);