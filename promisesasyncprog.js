"use strict";

let fs = require("fs");

    function readFile(fileName) {
        return new Promise(function(resolve, reject) {
            fs.readFile(fileName, {encoding:'utf-8'}, function(err, contents) {
                if (err) {
                    reject(err);
                    return;
                } else {
                    resolve(contents);
                }
            });
        });
    };

    let promise = readFile(__dirname + "/file.txt");

    promise.then(function(contents) {
        console.log(contents);
    }).catch(function(err) {
        console.error(err);
    });

    console.log("hi !");

//promise.catch(function(err) {}); catch error

let thenable = {
        then:function(resolve, reject) {
            resolve(42); // -> then
            //reject() // -> catch
        }
};

let p1 = Promise.resolve(thenable);

p1.then(function(value) {
    console.log(value);
});

let p2 = Promise.all([promise, p1]); //execute all promises

p2.then(function(value) {
    console.log("all");
    console.log(value[0]);
    console.log(value[1]);
    console.log("/all");
});

let p3 = Promise.race([promise, p1]); //return the value of the first promise who finish

p3.then(function(value) {
    console.log("race");
    console.log(value);
    console.log("/race");
});


class MyPromise extends Promise {
    success(resolve, reject) {
        return this.then(resolve, reject);
    }

    failure(reject) {
        return this.catch(reject);
    }
}

let p4 = new MyPromise(function(resolve, reject) {
    //resolve(42);
    reject("oups!");
});

p4.success(function(value) {
    console.log(`sucess ${value}`);
}).failure(function(value) {
    console.log(`failure ${value}`);
});

function run(taskDef) {
    let task = taskDef();

    let result = task.next();

    (function step() {
        if (!result.done) {
            let promise = Promise.resolve(result.value);

            promise.then(function(value) {
                result = task.next(value);
                step();
            }).catch(function(error) {
                result = task.throw(error);
                step();
            });
        }
    })(); //IIEFs...
}

run(function *() {
    let contents = yield readFile(__dirname + "/file.txt");
    console.log("run");
    console.log(contents);
    console.log("/run");
});