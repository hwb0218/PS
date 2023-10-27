// 2839. 설탕배달
// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split("\n");
const input = ['23'];
let n = Number(input[0]);
let cnt = 0;
let flag = false;

while (n >= 0) { // 0보다 크거나 같으면 반복
  if (n == 0 || n % 5 == 0) { // n이 0또는 5로 완전히 나누어 진다면
    cnt += parseInt(n / 5); // 5로 나눈 몫을 더함
    console.log(cnt);
    flag = true; 
    break;
  }
  n -= 3; // n이 5로 완전히 나누어지지 않는다면 3을 뺄셈
  cnt++; 
}

if (!flag) {
  console.log(-1);
}