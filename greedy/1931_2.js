const input = ['11',  
'1 4',   '3 5',
'0 6',   '5 7',
'3 8',   '5 9',
'6 10',  '8 11',
'8 12',  '2 13',
'12 14'];

let n = Number(input[0]);

let arr = [];
for (let i = 1; i < n; i++) {
  arr.push(input[i].split(' ').map(Number));
}

arr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

let cnt = 1;
let cur = 0;

for (let i = 1; i < n; i++) {
  if (arr[cur][1] <= arr[i][0]) {
    cnt += 1;
    cur = i;
  }
}

console.log(cnt);