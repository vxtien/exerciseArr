function sumInput() {
    let numbers = [];
    while (true) {
      let input = prompt("Nhập số:");
      if (input === null || input === "" || input === " " || isNaN(input)) {
        break;
      }
      numbers.push(Number(input));
    }
    let sum = 0;
    for (let number  of numbers) {
      sum += number;
    }
    document.getElementById('text').innerHTML = `Tổng các số đã nhập là: ${sum} `
    return sum;
}
sumInput();
  

