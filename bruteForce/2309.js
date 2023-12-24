// 일곱 난쟁이

// const input = [
//   '20', '7',  '23',
//   '19', '10', '15',
//   '25', '8',  '13'
// ];

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const sum = input.reduce((acc, cur) => acc + cur, 0);

let ret = [];
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < i; j++) {
    if (sum - input[i] - input[j] === 100) {
      ret = data.filter((el, _, arr) => el !== arr[i] && el !== arr[j]);
      break;
    }
  }
}

console.log(ret.sort((a, b) => a - b).join('\n'));