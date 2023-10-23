// const input = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const input = ['105', '88', '92', '215', '77', '193', '302'];

const data = input.map(Number);

let temp = [];
let ret = 0;
for (let i = 0; i < input.length; i++) {
  temp[data[i] % 42] = 1; 
}

for (let i = 0; i< temp.length; i++) {
  if (data[i] >= 1) {
    ret++;
  }
}

console.log(ret);