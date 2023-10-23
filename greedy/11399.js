const input = ['5', '3 1 4 3 2'];

const n = Number(input[0]);
let num = input[1].split(' ').map(Number);

num.sort((a, b) => a - b);

let sum = 0;
let result = 0;
num.forEach((el) => {
  sum += el;
  result += sum;
});

console.log(result);



