"use strict";

//some syntax shortcut (concise method syntax)

function createPerson(name, age) {
    return {
        name, //equivalent to name : name
        age // equivalent to age : age
    };
}

var person = {
        name : 'Guillaume',
        sayName() { //equivalent to sayName : function()
            console.log(this.name);
        }
};

//strict comparison
console.log(+0 === -0); //true
console.log(Object.is(+0, -0)) // false

//instead of mixin()
function Object2() {};
Object2.prototype = {
        constructor: Object2,
        sayHello: function() { console.log('hello!')}
};

var object1 = {};

Object.assign(object1, Object2.prototype); //Object.assign = mixin
console.log(object1.sayHello());

//Object.setPrototypeOf()
//Object.getPrototypeOf()
//Object.getPrototypeOf(this).getFunction().call(this) == super.getFunction() // call the parent