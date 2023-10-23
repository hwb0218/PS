// 세수정렬
const input = ['3 1 2'];
const data = input[0].split(' ').map(Number);

data.sort((a, b) => a - b);


let ret = '';
data.forEach((item) => {
  ret += `${item} `;
});

console.log(ret);