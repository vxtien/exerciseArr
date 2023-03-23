function getAverageAge(users) {
    if (users.length === 0) {
      return 0;
    }
    
    let sum = 0;
    for (let i = 0; i< users.length; i++) {
      sum += users[i].age;
    }
    const averageAge = sum / users.length;
    return averageAge;
}

let users = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 },
];

let result = getAverageAge(users);
document.getElementById('text').innerHTML = `Độ tuổi trung binh là: ${result} `
console.log(result);