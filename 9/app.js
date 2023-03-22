let arr = [5, 2, 1, -10, 8];
arr.sort(function (a, b) {
    if(a > b) return -1;
    if(a < b) return 1;
    return 0;
})

console.log(arr);