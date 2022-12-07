/*
 - Introduction to Classes
 - Creating Classes
 - Class Properties and constructor
 - Class methods
 - Creating Instance of Class
 - Member Visibility
 - Static Members
*/

import { Login, User } from './interface';
// import * as UserLogin from './interface';

interface Address {
    street: string;
    city: string;
    state: string;
    pin: string;
}

class Employee implements Login {
    #id: number;

    protected name: string;

    address: Address;

    get empId(): number {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }

    static getEmployeeCount(): number {
        return 50;
    }

    constructor(id: number, name: string, address: Address) {
        this.address = address;
        this.#id = id;
        this.name = name;
    }

    login(): User {
        return { name: "John", id: 1, email: "" };
    }

    getNameWithAddress(): string {
        return `${this.name} stays at ${this.address.street}`;
    }
}

let john = new Employee(1, "John", { street: "ABC", city: "Bangalore", state: "Karnataka", pin: "560076" });

// john.id = 1;
// john.name = "John";
// john.address = "Highway 71";

console.log(john);

john.empId = 100;

console.log(john.empId);

console.log(Employee.getEmployeeCount());

let adress = john.getNameWithAddress();

console.log(adress);

class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {
        super(id, name, address);
    }

    // getNameWithAddress(): string {
    //     return `${this.name} is a manager at ${this.address}`;
    // }
}

let mike = new Manager(2, "Mike", { street: "Cherise Drive", city: "Bangalore", state: "Karnataka", pin: "560076" });

console.log(mike.getNameWithAddress());