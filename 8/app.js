function filterRangerInPlacde(arr, a, b) {
    let newArr = [];
    for(let i=0; i<arr.length; i++) {
        if (a<= arr[i] && arr[i] <=b) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let arr = [5, 3, 8, 1]
let arr1 = filterRangerInPlacde(arr, 1, 4);

console.log(arr1);