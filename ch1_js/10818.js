let input = ['5', '14 1 55 3 4'];

let data = input[1].split(' ').map(Number);

const max = data.reduce((acc, cur) => Math.max(acc, cur));
const min = data.reduce ((acc, cur) => Math.min(acc, cur));

console.log(min, max);