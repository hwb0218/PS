const input = ['2', '3 ABC', '5 /HTP'];

let tc = Number(input[0]);

// for (let i = 1; i <= tc; i++) {
//   let temp = input[i].split(" ");
//   let num = Number(temp[0]);
//   let ret = '';
//   for (let x of temp[1]) {
//     for (let j = 0; j < num; j++) {
//         ret += x;
//     }
//   }
//   console.log(ret);
// }

for (let i = 1; i <= tc; i++) {
  let [c, s] = input[i].split(" ");
  let ret = '';

  for (let j = 0; j <= s.length; j++) {
    ret += s.charAt(j).repeat(c);
  }
  console.log(ret);
}