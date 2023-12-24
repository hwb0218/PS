// const fs = require('fs');
const input = ['5', '2 1 5 4 3'];
const n = Number(input[0]);
const data = input[1].split(' ').map(Number);

let cnt = 0;
let arrow = Array.from({length: 100001}, () => 0);

let temp = 0;
for (let x of data) {
  if (arrow[x] > 0) {
    arrow[x] -= 1;
    arrow[x - 1] += 1;
  } else {
    arrow[x - 1] += 1;
    cnt += 1;
  }
}

console.log(cnt);