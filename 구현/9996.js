const [n, p, ...input] = [
  '3',
  'a*d',
  'abcd',
  'aacccdd',
  'anestonestod',
  'facebook',
];

const [pre, suf] = p.split('*');

const ret = input.map((item) => {
  // 패턴 aa*dd 경우가 올 수 있으므로 pre + suf가 주어진 단어보다 길다면 NE 출력 
  if (pre.length + suf.length > item.length) {
    return 'NE';
  }
  // at() method는 사용 불가능
  if (item.startsWith(pre) && item.endsWith(suf)) {
    return 'DA';
  } else {
    return 'NE';
  }
});

console.log(ret.join('\n'));