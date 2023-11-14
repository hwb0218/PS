const input = [
  '2',   '5',   '3 2',
  '1 4', '4 1', '2 3',
  '5 5', '7',   '3 6',
  '7 3', '4 2', '1 4',
  '5 7', '2 5', '6 1'
];

let TC = Number(input[0]);
let line = 1;

while(TC--) {
  let n = Number(input[line]);
  let arr = [];
  for (let i = line + 1; i <= line + n; i++) {
    let data = input[i].split(' ').map(Number);
    arr.push(data);
  }
  arr.sort((x, y) => x[0] - y[0]);
  
  let min = Infinity;
  let cnt = 0;
  for (let [x, y] of arr) {
    if (y < min) {
      min = y;
      cnt += 1;
    }
  }
  console.log(cnt);
  line += n + 1; 
} 
