"use strict";

var a = function() {
    var b = 'ok';

    if (true == true) {
        let c = 'toto';
        var d = 'tata';

        console.log(b);
        console.log(c);
        console.log(d);
    }

    console.log(b);
    //console.log(c); // error in strict mode
    console.log(d);
}

//a();

for (var i = 0; i < 10; i++) {
    //do nothing
}

console.log(i); // i is accessible

for (let j = 0; j < 10; j++) {
    //do nothing
}

//console.log(j); // j is not accessible, throws an error

//var funcs = [];
//
//for (var i = 0; i < 10; i++) {
//    funcs.push((function(value) {
//        return function() {
//            console.log(value);
//        }
//    }(i))); // use immediately invoked function expression (IIFE), needed for having a new "i" variable and output 1,2,3...10 instead of 10,10,...10
//}
//
//funcs.forEach(function(func) {
//    func();
//})

var funcs = [];

for (let i = 0; i < 10; i++) { //using let instead of IIFE
    funcs.push(function() {
            console.log(ino);
    });
}

funcs.forEach(function(func) {
    func();
})




