// 1. Use Strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6) 
// - Mutable
let globalName = 'global name';
{
    let name = 'Hanna';
    console.log(name);
    name = 'Kim';
    console.log(name);
}

console.log(name);
console.log(globalName);

// var (Don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope
console.log(age);
age = 4;
var age = 4;
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;
// Note!!!!!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes


// 4. Variable types
// primitive, single item: number, string, boolean, null, undefine, symbol
// object, box container
// function, first-class function
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'c';
const brenden = 'brenden';
const greeting = 'hello ' + brenden;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloName = `hi ${brenden}!`; //template literals (string), use backtick
console.log(`value: ${helloName}, type: ${typeof helloName}`);
console.log('value: ' + helloName + ' type: ' + typeof helloName);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value;
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; // same as let x = undefined
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects, they look like have same id but different
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id'); 
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// Dynamic typing: dinamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '2' / '8';
console.log(`value: ${text}, type: ${typeof text}`);

// object, real-life object, data structure
const hanna = { name: 'Hanna', age: 21};
console.log(`My name is ${hanna.name} and I am ${hanna.age}.`);




























