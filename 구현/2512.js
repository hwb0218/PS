let [a, input, b] = ['4', '120 110 140 150', '485'];

const n = Number(a);
const arr = input.split(' ').map(Number);
const m = Number(b);

let start = 1;
let end = Math.max(...arr);
let ret = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  const sum = arr.reduce((acc, cur) => acc + Math.min(cur, mid), 0);

  if (sum <= m) {
    ret = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(end);