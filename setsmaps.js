"use strict";

let set = new Set([1,3,5,6,4,2,3]); //keep unicity

set.add(1);
set.add("1");

console.log(set.size);
console.log(set.has(3));
console.log(set.has(33));

set.delete(1);
console.log(set.has(1));
console.log(set.size);

set.forEach(function(value, key, ownerSet) {
    console.log(key + " " + value);
    //console.log(ownerSet);
})

let array = [...set]; //set to array

set.clear();
console.log(set.size);
console.log(array);

let weakSet = new WeakSet(); //very simple set who don't keep track of reference if object set to null, can only contain object

let map = new Map([['year', '2018',], ['owner', 'Guillaume']]); //key => value
map.set('title', 'solomon kane');
map.set('author', 'Howard');
//has() delete() clear() size

console.log(map.get('title'));
console.log(map.get('author'));
console.log(map);

map.forEach(function(value, key, ownerMap) {
    console.log(key + " " + value);
   // console.log(ownerMap);
})

//let weakMap = new WeakMap(); //like weakset but with ONLY object as key