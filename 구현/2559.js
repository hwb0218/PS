const input = ['10 5',
'3 -2 -4 -9 0 3 7 13 8 -3'];

const [n, k] = input[0].split(' ').map(Number);
const data = input[1].split(' ').map(Number);
const psum = Array(n).fill(0);

for (let i = 1; i <= n; i++) {
  psum[i] = psum[i - 1] + data[i - 1];
}

let ret = -Infinity;
for (let i = k; i <= n; i++) {
  ret = Math.max(ret, psum[i] - psum[i - k]);
}

console.log(ret);