// Reasons to add 'use strict':
// 1. Whole-script script mode syntax
// 2. Javascript is very flexible
// 3. flexible === dangerous
// 4. It is added in ECMAScript 5
'use strict';


// primitive- number, string, boolean, null, underfined
// object- key:value
let obj = {
    name: 'Hanna',
    age: 4,
};
console.log(obj.name);

let obj2 = obj;
console.log(obj2.age);

obj.name = 'james';
console.log(obj2.name);

// function
function add(num1, num2) {
    return num1 + num2;
}

function surprise(callback) {
    console.log(callback);
    const result = callback(2, 3); // add(2, 3)
    console.log(result);
}

surprise(add);

// Boolean 
// false: 0, -0, '', null, undefined
// true: -1, 'hello', [], 'falsed'
let num = 8; //undefined
if(num) {
    console.log('true');
} else {
    console.log('false');
}

num && console.log(num);

let objTest = {
    name: 'Hanna',
};
if(objTest) {
    console.log(objTest.name);
}

objTest && console.log(objTest.name);