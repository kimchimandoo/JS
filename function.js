// Function
// - fundmental building block in the program
// - subprogram can be used multiple times
// - performs a task or caculates a value

// 1. Function declaration
// function name(param1, param2) { body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardPoint -> createCard, createPoint
// function is object in Js

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello, Hanna');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name:'ellie'};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unkown') {
    // if (from === undefined) {
    //     from = 'unknown'
    // }
    console.log(`${message} by ${from}`)
}
showMessage('Hey!');
showMessage('Hi!', 'Hanna');

// 4. Rest parameters (added in ES6, array function)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    } 
    for (const arg of args) {
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}

printAll('dream', 'conding', 'ellie', 'Kim');

// 5. Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello in function';
    console.log(message); //local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello in another function';
        console.log(childMessage)
    }
   printAnother();
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); 
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

//good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assgined as a value to variable
// can be passed as an argument to other function
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { //anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function (function has no name)
const printYes = function (){
    console.log('Yes!');
}

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
    console.log('No!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
};

const simplePrint2 = () => console.log('simplePrint2!');
simplePrint2();

const add = (a, b) => a + b;
add(2, 4);
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
}
simpleMultiply(3, 5);

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();


// Fun Quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'devide':
            return a / b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}

console.log(calculate('add', 1, 3));










