const [input] = ['ABCD'];

const alpha = Array(26).fill(0);
const asciiOfA = 'A'.charCodeAt();
for (let c of input) {
  alpha[c.charCodeAt(0) - asciiOfA]++;
}

let flag = 0;     
let left = '';
let mid = '';

for (let i = 0; i <= 25; i++) {
  if (alpha[i] & 1) {
    mid = String.fromCharCode(i + asciiOfA);
    flag++;
    alpha[i]--;
  }
  
  if (flag >= 2) {
    break;
  }

  for (let j = 0; j < Math.round(alpha[i] / 2); j++) {
    left += String.fromCharCode(i + asciiOfA);
  }
}

if (flag >= 2) {
  console.log("I'm Sorry Hansoo");
} else {
  console.log(left + mid + left.split('').reverse().join(''));  
}
