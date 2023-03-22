function filter(arr, a, b) {
    let newArr = [];

    for(let i=0; i<arr.length; i++){
        if (arr[i] > a && arr[i] < b) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
let arr1 = filter(arr, 3 ,9);
console.log(arr1);
console.log(arr);