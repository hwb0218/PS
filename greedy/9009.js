const input = ['4', '100', '200', '12345', '1003'];

const pibo = [0, 1];

while(pibo[pibo.length - 1] < 1e9) pibo.push(pibo[pibo.length - 1] + pibo[pibo.length - 2]);

const TC = Number(input[0]);

for (let i = 1; i <= TC; i++) {
  let n = Number(input[i]);
  let piboIndex = pibo.length - 1;
  const ret = [];

  while(n > 0) {
    if(n >= pibo[piboIndex]) {
      n -= pibo[piboIndex];
      ret.push(pibo[piboIndex]);
    }
    piboIndex -= 1;
  }
  
  const answer = ret.reverse().reduce((acc, cur) => acc += `${cur} ` , '');
  console.log(answer);
}