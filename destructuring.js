"use strict";

let node = {
        type: 'id',
        name: 'foo',
        nested : {
            prop1 : {
                azerty: 'azerty'
            },
            prop2 : 'prop2'
        }
};

let {type:localType, name, nonExistentProperty, nonExistentPropertyWithDefaultValue = true} = node; //assign values from object properties to variable
let {nested : {prop1 : localProp}} = node; //nested property

//change the name of the variable instead of "type"

console.log(localType);
console.log(name);
console.log(nonExistentProperty);
console.log(nonExistentPropertyWithDefaultValue);
console.log(localProp);

let node2 = {
        type2: 'id2',
        name2: 'foo2'
}, type2 = 'type2', name2 = 'name2';

({type2, name2} = node2); //when variable are already defined

console.log(type2);
console.log(name2);

let colors = ['red', 'green', 'blue', ['purple', 'pink']];

let [ firstColor, secondColor ] = colors;
let [ ,, thirdColor] = colors;
let [ ,,, [ fourthColors ]] = colors;
let [ color, ...restColor] = colors;
let [ ...clonedColors ] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(fourthColors);
console.log(color);
console.log(restColor);
console.log(clonedColors);

//swapping values
let a = 1, b = 2;

[ a, b ] = [ b, a];

console.log(a);
console.log(b);

function setCookie(name, value, {secure, path, domain, expires}) { //destructed parameters, throw an error without third parameters
// function setCookie(name, value, {secure, path = '/', domain, expires } = {}) { //optionnal destructed parameters with default values, no error without third parameters
    //do something
}

setCookie('type', 'js', {
    secure: true,
    expires: 6000
})