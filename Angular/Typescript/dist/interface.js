"use strict";
/*
 - Creating Interfaces
 - Using Interfaces as Types
 - Implementing Interfaces
 - Extending Interfaces
 - Optional Properties
 - Object destructuring
 - Array destructuring
*/
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "John", id: 1, email: "" };
let { name: userName, email } = user;
let employee = { name: "John", id: 1, email: "", salary: 1000 };
let users = [
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
//# sourceMappingURL=interface.js.map