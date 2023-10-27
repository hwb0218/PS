// 1789.js
let input = ['200'];
let s = Number(input[0]);

let sum = 0;
let n = 0;

while(sum <= s) { // 서로 다른 자연수의 합이 s보다 크거나 같다면 반복
  n++; 
  sum += n;
}

console.log(n - 1); // s를 초과하게 만든 자연수는 서로 다른 자연수 합의 카운트에서 벗어나므로 -1을 수행한다.