// const fs = require('fs);
// fs.readFileSync('어쩌고').toString().split('\n');

const input = ['3', '5 50 50 70 80 100', '7 100 95 90 80 70 60 50', '3 70 90 80'];

const tc = Number(input[0]);

for (let t = 1; t <= tc; t++) {
  let data = input[t].split(' ').map(Number);
  let sum = 0;
  let n = data[0];
  for (let i = 1; i <= n; i++) {
    sum += data[i];
  }
  let avg = sum / n;
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if(avg < data[i]) {
      cnt++;
    }
  }
  console.log(`${(cnt / n * 100).toFixed(3)}%`);
}