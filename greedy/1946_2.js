const input = [
  '2',   '5',   '3 2',
  '1 4', '4 1', '2 3',
  '5 5', '7',   '3 6',
  '7 3', '4 2', '1 4',
  '5 7', '2 5', '6 1'
];

let TC = Number(input[0]);
let s = 1;

while(TC--) {
  let n = Number(input[s]);
  let arr = [];
  for (let i = s + 1; i <= s + n; i++) {
    arr.push(input[i].split(' ').map(Number));
  }
  arr.sort((a, b) => a[0] - b[0]);

  let cnt = 0;
  let min = Infinity;
  for (let [a, b] of arr) {
    if (b < min) {
      cnt += 1;
      min = b;
    }
  }
  console.log(cnt);
  s += n + 1;
}