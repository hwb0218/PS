// 스택 자료구조의 특성을 이용한다.
const inputs = ['3', 'ABAB', 'AABB', 'ABBA'];

const n = Number(inputs[0]);

let cnt = 0;

for (let i = 1; i <= n; i++) {
  const arr = []; 
  for (let x of inputs[i]) {
    if (arr.length && arr[arr.length - 1] === x) {
      arr.pop();
      continue;
    } 
    arr.push(x);
  }
  if (arr.length === 0) {
    cnt++;
  }
}

console.log(cnt);