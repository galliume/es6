"use strict";

let firstname = Symbol('first name'); //text is just a description
let person = {};

person[firstname] = 'Guillaume';

console.log(person[firstname]);
console.log(firstname);
console.log(typeof firstname);

//global symbol registry
let uid = Symbol.for('uid');
console.log(Symbol.keyFor(uid));

//well know symbols are already defined
// => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol