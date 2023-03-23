const employees = [
    {
        name: 'quang',
        age: 30,
        homeTown: 'Hà Nội',
    },
    {
        name: 'ha',
        age: 19,
        homeTown: 'Hà Nội',
    },
    {
        name: 'nam',
        age: 35,
        homeTown: 'Hà Nội',
    },
    {
        name: 'hai',
        age: 18,
        homeTown: 'Hà Nội',
    },
]
let text = document.getElementById('text');
let employeesList = employees.map((user)=> {
    const p =document.createElement('p');
    p.appendChild(document.createTextNode(`Nhân viên ${user.name} ${user.age} ở ${user.homeTown}`))
    text.appendChild(p)

})













