const input = ['18'];

let n = Number(input[0]);
let cnt = 0;
let flag = false;

while(n >= 0) {
  // 조건문 블럭에서 변수 n에 대한 아무런 처리를 하고 있지 않으므로 break를 사용 해야한다.
  if (n === 0 || n % 5 === 0) {
    cnt += parseInt(n / 5);
    flag = true;
    break;
  }
  n -= 3;
  cnt += 1;
}

console.log(flag ? cnt : -1);