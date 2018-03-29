"use strict";

class AnotherClass {

    constructor() {
        //simulate an abstract class
        if (new.target === AnotherClass) {
            throw new Error("it's an abstact class.");
        }
    }
    sayHi() {
        console.log('hi');
    }
};

class PersonClass extends AnotherClass{
    constructor(name) {
        super();

        this.name = name;
        //this.items = [];
        this.items = new Set();
    }

    sayName() {
        console.log(this.name);
    }

    get id() {
        console.log("getted");
        return this.uid;
    }

    set id(id) {
        console.log("setted");
        this.uid = id;
    }

    *[Symbol.iterator]() { //default iterator
        yield *this.items.values();
    }

    static create(name) {
        return new PersonClass(name);
    }
}

let person = new PersonClass('Guillaume');
person.sayName();
person.id ='toto';
console.log(person.id);

console.log(person instanceof PersonClass);
console.log(person instanceof Object);

console.log(typeof PersonClass);
console.log(typeof PersonClass.prototype.sayName);

person.items.add(1);
person.items.add(2);
person.items.add(41);
person.items.add(421);

for (let x of person) {
    console.log(x);
}

person.sayHi();