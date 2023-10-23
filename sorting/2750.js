// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split("\n");

const input = ['5', '5','2','3','4','1'];
const n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

let = arr.sort((a, b) => a - b);

let ret = ''
arr.forEach((item) => {
  ret += `${item}\n`;
});

console.log(ret);

