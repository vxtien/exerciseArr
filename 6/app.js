function camelize(str) {
  return str.split('-').map(function(word, index) { 
    console.log(index);   
    if (index === 0) {
        return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
}
document.getElementById('text').innerHTML = `Từ sau khi biến đổi là: ${camelize("background-color")} `

let arr = [1]

console.log(arr.length);