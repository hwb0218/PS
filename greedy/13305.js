// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = ['4', '2 3 1', '5 2 4 1'];

const n = Number(input[0]);
const dist = input[1].split(' ').map(Number);
const cost = input[2].split(' ').map(Number);

let minCost = cost[0];
for (let i = 0; i < n; i++) {
  minCost = Math.min(minCost, cost[i]);
  cost[i] = minCost;
}

// 가장 큰 수가 10억 x 10억 이므로 큰 수를 표현하려면 BigInt를 사용한다.
let ret = BigInt(0);
for (let i = 0; i < n - 1; i++) {
  ret += BigInt(dist[i]) * BigInt(cost[i]);
}

console.log(String(ret));