"use strict";

let values = [25, 10, 30, 100];

console.log(Math.max.apply(Math, values)); //es 5
console.log(Math.max(...values)); //es 6 with spread operator : ...

function dummy() {
    //do something
}

var dummy2 = function () {
    //do something
}

console.log(dummy.name);
console.log(dummy2.name);

function Person(name) {
    if (typeof new.target !== 'undefined') { //keyword new.target metaproperty is used to know if "new" have been used
        console.log(new.target);
        this.name = name;

        //if (typeof new.target === Person) //does a specific constructor has been used
    } else {
        throw new Error('must use new');
    }
}

var person = new Person('gui');
//var notAPerson = Person.call(person, 'az'); //error, "new" has not been used.

if (true) {
    console.log(typeof dummy3); //function

    function dummy3() { //block level function, hoisted to the top lvl of the block, if not in strict mode hoisted to the global lvl
        //empty
    }

    let dummy4 = function() { //block level function, NOT hoisted to the top lvl of the block because of "let"
        //empty
    }

    dummy();
}

console.log(typeof dummy3); //undefined


// arrow function result = param => return

let reflect = value => value;
/*
* equivalent to
* let reflect = function(value) {
* 	return value;
* };
*/

let sum = (num1, num2) => num1 + num2;
let sum2 = (num1, num2) => { return num1 + num2 };

let getName = () => 'Guillaume';

let getTempItem = id => ({id: id, name: "Temp"}); //() needed for literals

/*
 * equivalent to
 * let getTempItem = function(id) {
 * 		return {
 * 			id:id,
 * 			name: "Temp"
 * 		};
 *	};
 */

//immediately invoked functions expressions IIFEs
let person2 = function(name) {
    return {
        getName: function() {
            return name;
        }
    };
}('Guillaume');

console.log(person2.getName());

//equivalent to
let person3 = ((name) => {
    return {
        getName: function() {
            return name;
        }
    }
})('Guillaume');

console.log(person3.getName());

//to avoid "this" binding with arrow function
let PageHandler = {
        id: "134",

        init: function() {
            document.addEventListener('click', event => this.doSomething(event.type), false); //arrow function instead of (function(){}).bind(this)
        },

        doSomething: function(type) {
            console.log('Handling' + type + ' for ' + this.id);
        }
};

//PageHandler.init();

let result = values.sort((a, b) => a - b);
console.log(result);

//tail call optimization
//tail call is when a function is the last statement in another function
// current stack frame is optimized

function tailCall() {
    //return 1 + tailCall2(); //not optimised (operation whithin the return)
    //tailCall2(); //not optimised (no return)
    /*
     * var result = tailCall2(); //not optimised return a variable instead of the function call
     * return result
     */
    return tailCall2(); //optimised return + just function call (no operation)
}


function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        //not optimized, must multiply after returning
        return n * factorial(n - 1);
    }
}

function factorial2(n, p = 1) {
    if (n <= 1) {
        return 1 * p;
    } else {
        //optimised
        return factorial(n - 1, result);
    }
}













