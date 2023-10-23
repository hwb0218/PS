const input = [
  '10 42300', '1',
  '5',       '10',
  '50',      '100',
  '500',     '1000',
  '5000',    '10000',
  '50000'
];

let [n, num] = input[0].split(' ').map(Number);

let cnt = 0;
for (let i = n - 1; i > 0; i--) {
  if (num < input[i]) continue;
  cnt += parseInt(num / input[i]);
  num %= input[i]; // 나머지 돈
}

console.log(cnt);