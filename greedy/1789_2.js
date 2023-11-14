const input = ['200'];

const n = Number(input[0]);

let s = 0;
let ret = 0;

while (ret <= n) {
  s++;
  ret += s;
}

console.log(s - 1);