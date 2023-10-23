// const fs = require('fs);
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const input = ['5 2', '4 1 2 3 5'];

const [n, k] = input[0].split(' ').map(Number);
const data = input[1].split(' ').map(Number);

let ret = data.sort((a, b) => a - b);

console.log(ret[k - 1]);