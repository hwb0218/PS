const input = [
  '13',
  'but',   'i',
  'wont',  'hesitate',
  'no',    'more',
  'no',    'more',
  'it',    'cannot',
  'wait',  'im',
  'yours'
];
const n = Number(input[0]);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}

let ret = '';
arr = new Set(arr.sort((a, b) => {
  if(a.length !== b.length) {
    return a.length - b.length;
  }
  if (a < b) {
    return a - b;
  }
})).forEach((i) => {
  ret += `${i}\n`;
});

console.log(ret);