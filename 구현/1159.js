const input = [
  '18',
  'babic',
  'keksic',
  'boric',
  'bukic',
  'sarmic',
  'balic',
  'kruzic',
  'hrenovkic',
  'beslic',
  'boksic',
  'krafnic',
  'pecivic',
  'klavirkovic',
  'kukumaric',
  'sunkic',
  'kolacic',
  'kovacic',
  'prijestolonasljednikovi'
];

const n = Number(input[0]);
const arr = Array(26).fill(0);
for (let i = 1; i <= n; i++) {
  const s = input[i].charCodeAt(0);
  arr[s - 'a'.charCodeAt()]++;
}

let ret = '';
for (let i = 0; i < 26; i++) {
  if (arr[i] >= 5) {
    ret += String.fromCharCode(i + 'a'.charCodeAt());
  }
}

console.log(ret ? ret : 'PREDAJA');