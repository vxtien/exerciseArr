let arr = ["HTML", "Javascript", "CSS"];

let sorted = arr.slice();

sorted.sort();

document.getElementById('text').innerHTML = `Mảng mới sao chép và sắp xếp là: ${sorted} `
console.log(sorted);
console.log(arr);