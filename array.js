'use strict';

// Array 

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position 
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); 

// 3. Looping over an array
// print all fruits 
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruits);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion. deletion, copy
// push : add an item to the end
fruits.push('strawberry', 'peach');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('strawberry', 'lemon');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('strawberry', 'orange', 'lemon');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'apple', 'watermelon');
console.log(fruits);

// combine two arrays
const fruits2 = ['peer', 'coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf : find the index
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));

// includes
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('HELLO'));

//lastIndexOf
fruits.push('apple');
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));