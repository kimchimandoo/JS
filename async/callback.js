'use strict';

// Javascript is synchronouse.
// Excute the code block in order after hoisting.
// hoisting: var, function declaration 

console.log('1');
setTimeout(function(){
    console.log('2');
}, 1000);
setTimeout(() => console.log('timeout!'), 1000);
console.log('3');

// Syncronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('print immediately!'));

//Asyncronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

console.log('1'); // Syncronous
setTimeout(() => console.log('timeout!'), 1000); //Asyncronous
console.log('3'); // Syncronous
printImmediately(() => console.log('print immediately!')); // Syncronous
printWithDelay(() => console.log('async callback'), 2000); //Asyncronous

// callback hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles (user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin'});                
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('Enter your ID');
const password = prompt('Enter your Password');
userStorage.loginUser(
    id, 
    password, 
    (user) => {
        userStorage.getRoles(
            user,
            userWithRole =>{
                alert(`Hello, ${userWithRole.name}, you have a ${userWithRole.role} role`)
            }, 
            error => {
                console.log(error);
            }
        );
    }, 
    (error) => {
        console.log(error);
    }
);