let john = { name: "John", surname: "David", id: 1};
let pete = { name: "Pete", surname: "Smith", id: 2};
let mary = { name: "Mary", surname: "Wilson", id: 3};

let users = [john, pete, mary];

let usersList = users.map((user)=> ({
    id: user.id,
    fullName: `${user.name} ${user.surname}`,
}))

console.log(usersList);