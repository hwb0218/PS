const input = ['Baekjoon Online Judge'];

// const fs = require("fs");
// const input = fs.readFileSync("dev/stdin").toString().split("\n");

const str = input[0]

let ret = '';
for (let i = 0; i < str.length; i++) {
  const char = str.charCodeAt(i);
  if (65 <= char && char <= 90) {
    if (char + 13 > 90) {
      ret += String.fromCharCode(char + 13 - 26);
    } else {
      ret += String.fromCharCode(char + 13);
    }
  } else if (97 <= char && char <= 122) {
    if (char + 13 > 122) {
      ret += String.fromCharCode(char + 13 - 26);
    } else {
      ret += String.fromCharCode(char + 13);
    }
  } else {
    ret += str[i];
  }
}

console.log(ret);