function sortByAge(user) {
    user.sort(function(a, b) {
        if(a.age > b.age) return 1;
        if(a.age < b.age) return -1;
        return 0
    })
}

let john = {name: "John", age: 25};
let pete = {name: "Pete", age: 30};
let mary = {name: "Mary", age: 28};

let users = [john, pete, mary];

sortByAge(users)

