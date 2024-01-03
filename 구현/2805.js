const input = ['4 7', '20 15 10 17'];

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let s = 1;
let e = Math.max(...arr);
let ret = 0;

while(s <= e) {
  const mid = Math.floor((s + e) / 2);
  const sum = arr.reduce((acc, cur) => cur > mid ? acc + cur - mid : acc, 0);

  if (sum < m) {
    e = mid - 1;
  } else {
    ret = mid;
    s = mid + 1;
  }
}

console.log(ret);