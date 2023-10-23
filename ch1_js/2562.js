let input = ['3', '29', '38', '12', '57', '74', '40', '85', '61'];

let value = 0;
let index = 0;

for (let i = 0; i < input.length; i++) {
  let data = Number(input[i]);

  if (data > value) {
    value = data;
    index = i + 1;
  }
}

console.log(value);
console.log(index);