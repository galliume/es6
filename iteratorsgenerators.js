"use strict";

//generator
function *createIterator() {
    yield 1;
    yield 2;
    yield 3;
}

let iterator = createIterator();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

function *createIterator2(items) {
    for (let i = 0; i < items.length; i++) {
        yield items[i];
    }

}

let iterator2 = createIterator2([1,3,9,10]);

console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());

let createIterator3 = function *(items) {
    for (let i = 0; i < items.length; i++) {
        yield items[i];
    }

}

let o = {
        *createIterator(items) {
            for (let i = 0; i < items.length; i++) {
                yield items[i];
            }

        }
};

let collection = {
        items: [],
        *[Symbol.iterator]() {
            for (let item of this.items) {
                yield item;
            }
        }
};

collection.items.push(1);
collection.items.push(2);
collection.items.push(3);

for (let x of collection) {
    console.log(x);
}

let set = new Set([1,3,5,6,4,2,3]);

for (let entry of set.entries()) {
    console.log(entry);
}

for (let value of set.values()) {
    console.log(value);
}

let map = new Map([['year', '2018',], ['owner', 'Guillaume']]); //key => value
map.set('title', 'solomon kane');
map.set('author', 'Howard');

for (let key in map.keys()) {
    console.log(key);
}

function *createIterator4() {

    yield *createIterator(); // delegate to another generator

    yield *"hello"; //default iterator of string

    let first = yield 1; //execution from right to left until next yield / next
    let second = yield first + 2;
    yield second + 3;
}

let iterator4 = createIterator4();
console.log(iterator4.next());
console.log(iterator4.next(4));
console.log(iterator4.next(5));
//console.log(iterator4.throw(new Error('error')));
console.log(iterator4.next());


//simple task runner
function run(taskDef) {
    let task = taskDef();

    let result = task.next();

    function step() {
        if (!result.done) {
            result = task.next(result.value);
            step();
        }
    }

    step();
}

run(function *() {

    let value = yield 1;
    console.log(value);

    value = yield value + 3;
    console.log(value);
})


//simple async task runner
function run(taskDef) {
    let task = taskDef();

    let result = task.next();

    function step() {
        if (!result.done) {
            if (typeof result.value === "function") {
                result.value(function(err, data) {
                    if (err) {
                        result = task.throw(err);
                        return;
                    }

                    result = task.next(result.value);
                    step();
                });
            } else {
                result = task.next(result.value);
                step();
            }
        }
    }

    step();
}

let fs = require("fs");

function readFile(filename) {
    return function(callback) {
        fs.readFile(filename, callback);
    };
}

run(function *() {
    let content = yield readFile("./destructuring.js");
    console.log(content);
    console.log("done");
})











