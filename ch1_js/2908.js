let file = ['734 893'];

let input = file[0].split(' ');

// 비교하며 큰값만 변수에 할당.
let ret = -10000000000;
for (let i = 0; i < input.length; i++) {
  let cur = '';
  for (let j = input[i].length - 1; j >= 0; j--) {
    cur += input[i][j];
    ret = Math.max(ret, Number(cur));
  }
}
console.log(ret);