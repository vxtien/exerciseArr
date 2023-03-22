function getAverageAge(users) {
    if (users.length === 0) {
      return 0;
    }
    
    const totalAge = users.reduce((sum, user) => sum + user.age, 0);
    
    const averageAge = totalAge / users.length;
    
    return averageAge;
}

let users = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 },
];

let result = getAverageAge(users);
console.log(result);