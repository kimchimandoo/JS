'use strict';

// Promise is a JavaScript object for asyncronous operation
// State: pending -> fulfilled or rejected
// Producer vs Consmer

// 1. Producer
// When new Promise is created, the excutor runs automatically!!!
const promise = new Promise((resolve, reject) => {
        // doing some heavy work (nerwork, read files)
    console.log('Do something...');
    
    setTimeout(() => {
        // resolve('hanna');
        reject(new Error('no network'));
    }, 1000);
});

// 2. Consumers: then, catch, finally
promise
.then((value) => {
    console.log(value);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log('finally');
})

// Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {resolve(1)}, 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
   return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000)
   });
})
.then(num => console.log(num));
