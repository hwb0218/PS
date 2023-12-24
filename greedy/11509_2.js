// const rl = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = ['5', '1 2 3 4 5'];

const n = Number(input[0]);
const data = input[1].split(' ').map(Number);
const arrowPos = Array(1000001).fill(0);

let ret = 0;

for (let x of data) {
  if (arrowPos[x] > 0) {
    arrowPos[x - 1] += 1;
    arrowPos[x] -= 1;
  } else {
    arrowPos[x - 1] += 1;
    ret += 1;
  }
}

console.log(ret);