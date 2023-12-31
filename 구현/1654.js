const [input, ...data] = ['4 11', '802', '743', '457', '539']; 

const [k, n] = input.split(' ').map(Number);
const arr = data.map(Number);
// 이진 탐색 시작, 끝점 설정
let s = 1;
let e = Math.max(...arr);
let ret = 0;

while (s <= e) {
  const mid = Math.floor((s + e) / 2); // 자를 길이 설정
  const sum = arr.reduce((acc, cur) => acc + Math.floor(cur / mid), 0); // mid 만큼 잘랐을 때 랜선의 갯수합

  if (sum < n) { // 랜선의 갯수가 n보다 작다면
    e = mid - 1; // 자를 길이 줄이기
  } else { // 랜선의 갯수가 충분하다면
    ret = mid; 
    s = mid + 1; // 자를 길이 늘리기
  }
}

console.log(ret);