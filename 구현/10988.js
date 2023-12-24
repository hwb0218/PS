const input = 'level';

// 풀이. 1 
// let flag = 1;
// for (let i = input.length - 1; i >= Math.round(input.length / 2); i--) {
//   if (input[i] !== input[(input.length - 1) - i]) {
//     flag = 0;
//     break;
//   }
// }

// console.log(flag);

// 풀이. 2  (투 포인터)
let left = 0;
let right = input.length - 1;
let flag = 1;
while(left <= right) {
  if (input.charAt(left) !== input.charAt(right)) {
    flag = 0;
    break;
  }
  left++;
  right--;
}

console.log(flag);