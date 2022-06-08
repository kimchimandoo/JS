'use strict';
// class 
// - template
// - declare once
// - no data in

// object
// - instance of a class
// - created many times
// - data in

// Object-oriented programming
// class: template
// object: instance of a class
// Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }
    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellite', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak(); 

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        //if (value < 0) {
        //  throw Error('age can not be negative');
        //}
        this._age = value > 0 ? value : 0;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age, user1.firstName);

// 5. inheritance
// a way for one class to extend another class
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('I am triangle.');
    }
    getArea() {
        return(this.width * this.height) / 2;
    }
}

const rectangleBlue = new Rectangle(20, 20, 'blue');
rectangleBlue.draw();
console.log(rectangleBlue.getArea());
const triangleRed = new Triangle(20, 20, 'red');
triangleRed.draw();
console.log(triangleRed.getArea());

// 6. Class Checking: instanceof
console.log(rectangleBlue instanceof Rectangle);
console.log(triangleRed instanceof Triangle);
console.log(triangleRed instanceof Rectangle);
console.log(triangleRed instanceof Shape);
console.log(triangleRed instanceof Object);
console.log(triangleRed.toString());

// Fun quiz
// function calculate(command, a, b)
// command: add, substract, dividem multiply, remainder

function calculate(command, a, b) {
    switch(command) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
            // return 'type wrong'
    }
}

console.log(calculate('add', 1, 3));