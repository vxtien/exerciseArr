let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let users = [john, pete, mary];

let text = document.getElementById('text');
let names = users.map((user)=> {
    const p =document.createElement('p');
    p.appendChild(document.createTextNode(`${user.name}`))
    text.appendChild(p)
});

