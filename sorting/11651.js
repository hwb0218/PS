// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = ['5', '0 4', '1 2', '1 -1', '2 2', '3 3'];
const n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(' ').map(Number);
  arr.push([x, y]);
}
let ret = '';
arr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
}).forEach((i) => {
  ret += `${i[0]} ${i[1]}\n`;
});

console.log(ret);