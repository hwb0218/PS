// 잃어버린 괄호
// 수앞에 '-' 연산자가 있으면 괄호로 묶었을 때 최소값을 표현할 수 있다.
// '-' 연산자 기준으로 문자열을 나눈다.

let input = ['55-50+40'];
input = input[0].split('-');

let result = 0;
for (let i = 0; i < input.length; i++) {
  let cur = input[i].split('+').reduce((acc, cur) => acc + Number(cur), 0);
  if (i === 0) {
    result += cur;
  } else {
    result -= cur;
  }
}
console.log(result);