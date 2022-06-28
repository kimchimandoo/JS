// JSON
// Javascript Object Notation

// Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json)

json = JSON.stringify(['apple', 'banana']);
console.log(json)

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump`);
    },
};

json = JSON.stringify(rabbit, ['name']);
console.log('json: ', json);

json2 = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'Hanna' : value;
});

console.log('json2: ', json2);


// JSON to Object
// parse(json)
json = JSON.stringify(rabbit);

const obj = JSON.parse(json);
console.log('obj: ', obj);
console.clear();
const obj2 = JSON.parse(json, (key, value) => {
    return key === 'birthDate' ? new Date(): value;
});
console.log('obj2: ', obj2)

rabbit.jump();
console.log(`name is ${rabbit.name}`)
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);