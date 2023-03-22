function sumInput() {
    let nums = [];
    while (true) {
      let input = prompt("Nhập số:");
      if (input === null || input === "" || isNaN(input)) {
        break;
      }
      nums.push(Number(input));
    }
    let sum = 0;
    for (let num of nums) {
      sum += num;
    }
    console.log(sum);
    console.log(nums);
    return sum;
}
sumInput();
  

