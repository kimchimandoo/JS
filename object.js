// objects
// one of the Javasctipt's data types.
// a collection of related data and/or functionality
// Nearly all objects in Javascript are instances of Object
// object = { key : value };

const obj1 = {} // 'object literal' syntax
const obj2 = new Object()  // 'object constructor' syntax

function print(person) {
    console.log(person.myName);
    console.log(person.age);
}

const hanna = {myName: 'Hanna', age: 21};
print(hanna);

// with javascript magic (dynamically typed languge)
// can add properties later
hanna.hasJob = true;
console.log(hanna.hasJob);

// can delete properties
delete hanna.hasJob;
console.log(hanna.hasJob);

// 2. Computed properties
// key should be always string
console.log(hanna.myName);
console.log(hanna['myName']);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(hanna, 'myName');
printValue(hanna, 'age');

// 3. Property value shorthand
const person1 = {myName: 'bob', age: 21};
const person2 = {myName: 'kim', age: 30};
const person3 = {myName: 'park', age: 50};
const person4 = makePerson('Mina', 18);
console.log(person4);

function makePerson(myName, age) {
    return {
        myName: myName,
        age: age,
    };
}

// 4. Contructor Function
const man1 = {myName: 'bob', age: 21};
const man2 = {myName: 'kim', age: 30};
const man3 = {myName: 'park', age: 50};
const man4 = new Person('Man', 28);
console.log(man4);

function Person(myName, age) {
    // this = {}
   this.myName = myName;
   this.age = age;
   // return this;
}

// 5. in operator: property exixtence check (key in obj)
console.log('name' in hanna);
console.log('myName' in hanna);
console.log('random' in hanna);
console.log(hanna.random);

// 2. for..in vs for..of
//  for (key in obj)
console.clear();
for (key in hanna) {
    console.log(key);
}

// for (value of interable)
const array = [1, 2, 3, 4];
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
for(value of array) {
    console.log(value);
}

// Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'Jay', age: 21};
const user2 = user;
user2.name = 'Tom';
console.log(user2);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3);

// Object.assign
const user4 = {};
Object.assign(user4, user); // const user4 = Object.assign({}, user);
user4.name = 'Park';
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'small'};
const mixed = Object.assign({}, fruit1, fruit2); // last property overwrite 
console.log(mixed.color);
console.log(mixed.size);
























