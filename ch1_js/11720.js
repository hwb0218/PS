const input = ['5', '54321'];

let n = Number(input[0]);
// let num = input[1].split("").map(Number);


let ret = 0;
for (let i of input[1]) {
  ret += Number(i);
}

console.log(ret);