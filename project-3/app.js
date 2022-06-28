let data = [
    {
        name: 'Hanna',
        age: '21'
    },
    {
        name: 'Kim',
        age: '10'
    },
    {
        name: 'Hanry',
        age: '30'
    },
    {
        name: 'Mina',
        age: '18'
    },
    {
        name: 'Maria',
        age: '2241'
    }
]

const info = document.querySelector('#info');

let dataInfo = data.map(function(list){
    return (
        `<div>${list.name} is ${list.age} years old.</div>`
    )
});

info.innerHTML = dataInfo.join('\r\n');
