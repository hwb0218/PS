// 16953. A → B

let input = ['2', '162'];

let [a, b] = input.map(Number);

let cnt = 0;
let flag = 0;
while(b >= a) {
  if (a == b) {
    flag = 1;
    break;
  }
  
  if (b % 2 == 0) {
    cnt++;
    b = parseInt(b / 2);
    continue;
  } else if (b % 10 == 1) {
    b = parseInt(b / 10);
    cnt++;
    continue;
  } else {
    break;
  }
}

if (flag) {
  console.log(cnt + 1); 
} else {
  console.log(-1);
}