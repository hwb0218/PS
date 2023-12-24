const arr = Array(26).fill(0);

const input = 'beakjoon';

for (let i = 0; i < input.length; i++) {
  arr[input.charCodeAt(i) - 'a'.charCodeAt()]++;
}

console.log(arr.join(' '));
