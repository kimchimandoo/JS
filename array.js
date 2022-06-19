'use strict';

// Array

// Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// Index position
const fruits = ['apple', 'orange'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for(let i = 0; i < fruits.length; i++) {
   console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c.forEach
fruits.forEach(function (fruit, index){ 
    console.log('forEach: ', fruit, index);
}); 
  //shorten version, above anonymous function can be changed to arrow function
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('peach', 'banna');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('watermelon');
console.log(fruits);

// shift: remove an item from the beginig
fruits.shift();
console.log(fruits);

//Note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('kiwi', 'mango');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(2, 1, 'watermelon', 'banana');
console.log(fruits);

// concat: combine two arrays
const fruits2 = ['cherry', 'carrot'];
const combineFruits = fruits.concat(fruits2);
console.log(combineFruits);

// 5. Searching
// indexof: find the index
console.log(fruits);
console.log('indexOf', fruits.indexOf('apple'));
console.log('indexOf', fruits.indexOf('peach'))

// includes: true/false
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('onions'));

// lastIndexOf
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));

