let file = ['5'];

let input = Number(file[0]);

for (let i = 0; i < input; i++) {
  let ret = '';
  for (let j = 0; j <= i; j++) {
    ret += '*';
  }
  console.log(ret);
  ret += '\n';
}
