const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// const input = ['4', '2 3 1', '5 2 4 1'];

// 주유 비용을 비오름차순으로 변경한다.
// 비오름차순: 내림차순과 유사한데 인접한 두 수가 같을 수 있다.
// 현재 주유소보다 뒤에 따라오는 주유소의 가격이 비싸다면 미리 결제를 수행한다.

const n = Number(input[0]);
const dist = input[1].split(" ").map(Number);
const cost = input[2].split(" ").map(Number);

let minCost = cost[0];
// 뒤따라오는 주유소 가격이 비싸다면 앞선 주유소의 가격과 동일하게 만든다.
for (let i = 0; i < n; i++) {
  minCost = Math.min(cost[i], minCost);
  cost[i] = minCost;
}
// 가장 큰 정수가 10억이므로 BigInt 사용
let ret = BigInt(0);

for (let i = 0; i < n - 1; i++) {
  ret += BigInt(dist[i]) * BigInt(cost[i]);
}

console.log(String(ret));