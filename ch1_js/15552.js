let file = ['5', '1 1', '12 34', '5 500', '40 60', '1000 1000'];

let tc = Number(file[0]);

let ret = '';
for (let t = 1; t <= tc; t++) {
  let data = file[t].split(" ");
  let f = Number(data[0]);
  let s = Number(data[0]);
  ret += (f + s + '\n');
}

console.log(ret);