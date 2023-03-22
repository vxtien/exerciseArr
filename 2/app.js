let styles = ["Jazz", "Blues"];
//2
styles.push("Rock-n-Roll");
//3
styles.splice(1,1,"Classics")
//4
let style4 = styles.shift();
console.log(style4);
// //5
styles.unshift("Rap", "Reggae");
console.log(styles);