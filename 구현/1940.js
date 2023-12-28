let [n, m, ...inputs] = ['6', '9', '2 7 4 1 5 3'];
// 투 포인터 사용시 정렬 수행
inputs = inputs[0].split(' ').sort().map(Number);

let ret = 0;
let left = 0;
let right = n - 1;

while(left < right) {
  if (inputs[left] + inputs[right] === Number(m)) {
    ret++;
    left++;
    right--;
  } else if (inputs[left] + inputs[right] > m) {
    right--;
  } else {
    left++;
  }
}

console.log(ret);