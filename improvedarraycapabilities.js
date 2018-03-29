"use strict";

let items = Array.of(2);
let oldItems = Array(2); //length is equal to 2 instead of 1...

console.log(items.length); //1
console.log(oldItems.length); //2...

let helper = {
    diff: 3,

    add(value) {
        return value + this.diff;
    }
}

function translate() {
    return Array.from(arguments, (value) => value + 1);
}

function translateh() {
    return Array.from(arguments, helper.add, helper); //3rd bind this to helper
}

let numbers = translate(1,2,3);
let numbersh = translateh(1,2,3);

console.log(numbers);
console.log(numbersh);

let numbersi = {
        *[Symbol.iterator]() {
            yield 1;
            yield 5;
            yield 10;
            yield 110;
        }
}

let numbersi2 = Array.from(numbersi, (value) => value + 1);

console.log(numbersi2);

console.log(numbers.find(n => n > 2));
console.log(numbers.findIndex(n => n > 2));

numbers.copyWithin(0, 1)
console.log(numbers);

//numbers.fill(22, startIndex, exclude);
numbers.fill(22);
console.log(numbers);


let buffer = new ArrayBuffer(10); //allocate 10 bytes
console.log(buffer.byteLength);

//generic view for int8 16 / 32 / 64
let view = new DataView(buffer); // allow to read / write in the buffer
//getInt8 setInt8 getUint8 setUint8, or 16 / 32 / 64

//type speicific view / 8 / 16 / 32 / 64
let view8 = new Int8Array(buffer);
let view32 = new Int32Array(buffer);
let view32 = new Float32Array(buffer);
