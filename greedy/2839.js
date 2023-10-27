// 2839. 설탕배달
// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let input = ['4'];
const arr = [5, 3];

let cnt = 0;
let num = Number(input[0]);

for (let i = 0; i < arr.length; i++) {
  cnt += parseInt(num / arr[i]);
  num %= arr[i]; 
}

console.log(num > 0 ? -1 : cnt);