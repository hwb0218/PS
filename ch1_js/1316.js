// let file = ['4', 'aba', 'abab', 'abcabc', 'a'];
let file = ['3', 'happy', 'new', 'year'];

function check(data) {
  let setData = new Set(data[0]);
  for (let i = 0; i < data.length; i++) {
    if (data[i] !== data[i + 1]) {
      if (setData.has(data[i + 1])) {
        return false;
      }
      setData.add(data[i + 1]);
    }
  }
  return true;
}

// function check(data) {
//   let array = Array.from({length: 27}, () => 0);
//   array[data[0].charCodeAt() - 97]++;
//   for (let i = 0; i < data.length - 1; i++) {
//     let nextCharCode = array[data[i + 1].charCodeAt() - 97];
//     if(data[i] !== data[i + 1]) {
//       if (nextCharCode >= 1) {
//         return false;
//       } else {
//         nextCharCode++;
//       }
//     }
//   }
//   return true;
// }

const tc = Number(file[0]);

let ret = 0;

for (let i = 1; i <= tc; i++) {
  const data = file[i];
  if (check(data)) ret++;
}

console.log(ret);
