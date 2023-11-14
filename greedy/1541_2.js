const input = ['55-50+40'];

let data = input[0].split('-');

let ret = 0;
for (let i = 0; i < data.length; i++) {
  const num = data[i].split('+').reduce((acc, cur) => {
   return acc + Number(cur); 
  }, 0);
  if (i === 0) {
    ret += num;
  } else {
    ret -= num;
  }
} 

console.log(ret);