"use strict";

const values = "ecmascript 6".split('');

let normalized = values.map(function(text) { // for each char, normalized it (usefull for encoding troubles)
    return text.normalize();
});

normalized.sort(function(first, second) {
    if (first < second) {
        return -1;
    } else if (first === second) {
        return 0;
    } else {
        return 1;
    }
})


console.log(values);
console.log(normalized);

function codePointLength(text) {
    let result = text.match(/[\s\S]/gu); // "u" exists only in ES 6

    return result ? result.length : 0;
}

console.log(codePointLength("abc"));
console.log(codePointLength("漢bc")); //can count code point whith "/u", very slow

let message = `multiline
    string
youpi`;

let message2 = String.raw`multiline\nstring\nyoupi`;

console.log(message);
console.log(message2); //strings raw
console.log(message.length); //space and indentation count

let name = 'Guillaume',
    msg = `Hello, ${name}.`; //substituion (like in php -> {})

console.log(msg);

let count = 10,
    price = 0.25,
    msg2 = `${count} items cost $${(count * price).toFixed(2)}.`; //first $ is for outputing the js expr, toFixed() format to two decimal

console.log(msg2);

/*
 * tags with litterals
 */
function passthru(literals, ...substitutions) {

    console.log(literals);
    console.log(substitutions);

    let result = '';

    for (let i = 0; i < substitutions.length; i++) {
        result += literals[i];
        result += substitutions[i];
    }

    result += literals[literals.length - 1];

    return result;
}

let msg3 = passthru`${count} items cost $${(count * price).toFixed(2)}.`; //use tags function

console.log(msg3);

