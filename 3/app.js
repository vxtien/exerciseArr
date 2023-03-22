let arr = ["a", "b"];
arr.push(function(){
    alert(this);
})
arr[2]();
console.log(arr[2]);
/* a,b,function(){
    alert(this)
}

vì vị trí thứ 3 trong mảng là phương thức nên khi gọi phương thức sẽ được chạy
*/