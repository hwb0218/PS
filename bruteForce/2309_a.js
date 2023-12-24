const a = [
  '20', '7',  '23',
  '19', '10', '15',
  '25', '8',  '13'
].map(Number);

// const fs = require("fs");
// const a = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const n = 9;
const r = 7;
const depth = 0;

function solve() {
  let sum = 0;
  for(let i = 0; i < r; i++) {
      sum += a[i];
  }
  if(sum === 100) {
      let arr = a.slice(0, 7);
      arr.sort((a,b) => a-b);
      for(let num of arr) {
          console.log(num);
      }
      process.exit(0);
  }
}

function permutation(n, r, depth) {
  if (r === depth) {
    solve();
    return;
  }

  for (let i = depth; i < n; i++) {
    [a[i], a[depth]] = [a[depth], a[i]];
    permutation(n, r, depth + 1);
    [a[i], a[depth]] = [a[depth], a[i]];
  }
  return;
}

permutation(n, r, depth);