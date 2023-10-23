const file = [' '];

// const data = file[0].trim().split(' ');

// if (data === '') {
//   console.log(0);
// } else {
//   console.log(data.length);
// }
let data = file[0];

let cnt = 0;
if (data.length && data[0] === ' ') {
  console.log(cnt);
}

for (let i = 1; i < data.length; i++) {
  if (data[i - 1] === ' ' && data[i] !== ' ') cnt++;
}
