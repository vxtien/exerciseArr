let john = { name: "John", surname: "David", id: 1};
let pete = { name: "Pete", surname: "Smith", id: 2};
let mary = { name: "Mary", surname: "Wilson", id: 3};

let users = [john, pete, mary];
let text = document.getElementById('text');
let usersList = users.map((user)=> {
    const id =document.createElement('td');
    id.appendChild(document.createTextNode(`${user.id}`))
    text.appendChild(id)

    const fullName =document.createElement('td');
    fullName.appendChild(document.createTextNode(`${user.name} ${user.surname},`))
    text.appendChild(fullName)
    // id: user.id,
    // fullName: `${user.name} ${user.surname}`,
})

console.log(usersList);