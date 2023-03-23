function filter(arr, a, b) {
    let newArr = [];

    for(let i=0; i<arr.length; i++){
        if (arr[i] > a && arr[i] < b) {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

let arr = [1,2,3,4,7,8,9,10,11,5,6,12,13];
let arr1 = filter(arr, 3 ,9);

document.getElementById('text').innerHTML = `Mảng mới biến đổi là: ${arr1} `