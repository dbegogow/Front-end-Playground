/*
 - Creating Interfaces
 - Using Interfaces as Types
 - Implementing Interfaces
 - Extending Interfaces
 - Optional Properties
 - Object destructuring
 - Array destructuring
*/

export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}

let user: User = { name: "John", id: 1, email: "" };

let { name: userName, email }: User = user;

interface Employees extends User {
    salary: number;
}

let employee: Employees = { name: "John", id: 1, email: "", salary: 1000 };

export interface Login {
    login(): User;
}

let users: User[] = [
    { name: "John", id: 1, email: "" },
    { name: "John1", id: 2, email: "" },
    { name: "John2", id: 3, email: "" },
    { name: "John3", id: 4, email: "" },
    { name: "John4", id: 5, email: "" },
];

let [user1, user2, ...restUsers] = users;

console.log(user1);
console.log(user2);
console.log(restUsers);