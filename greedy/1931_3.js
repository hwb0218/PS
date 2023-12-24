const input = ['11',  
'1 4',   '3 5',
'0 6',   '5 7',
'3 8',   '5 9',
'6 10',  '8 11',
'8 12',  '2 13',
'12 14'];

// const fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(' ').map(Number));
}
// 회의 종료시간이 같다면 시작시간으로 정렬
arr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

let cnt = 1;
let cur = 0;
// 현재 회의 종료시간보다 다음 회의 시작시간이 크거나 같다면 cnt 증가시키고 다음 회의를 현재 회의로 지정
for (let i = 1; i < n; i++) {
  if (arr[cur][1] <= arr[i][0]) {
    cur = i;
    cnt += 1;
  }
}

console.log(cnt);