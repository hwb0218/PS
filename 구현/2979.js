const input = ['5 3 1', '1 6', '3 5', '2 8'];

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const cost = input[0].split(' ').map(Number);

const car = Array.from({length: 101}, () => 0);

for (let i = 1; i <= 3; i++) {
  const [s, e] = input[i].split(' ').map(Number);
  for (let j = s; j < e; j++) {
    car[j]++;
  }
}

let res = 0;
for (let i = 1; i < car.length; i++) {
  if(!car[i]) continue;
  if(car[i] === 1) res += cost[0];
  if(car[i] === 2) res += cost[1] * 2;
  if(car[i] === 3) res += cost[2] * 3;
}

console.log(res);