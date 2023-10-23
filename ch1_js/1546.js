const input = ['3', '40 80 60'];

let n = Number(input[0]);
let num = input[1].split(" ").map(Number);

let ret = 0;

let max = num.reduce((a, b) => Math.max(a, b));

for (let i = 0; i < n; i++) {
  ret += num[i] / max * 100;
}

console.log(ret / n);