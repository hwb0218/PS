let input = ['23 48', '25'];

let [hours, minutes] = input[0].split(' ').map(Number);
// let hours = Number(input[0].split(' ')[0]);
// let minutes = Number(input[0].split(' ')[1]);
let count = Number(input[1]);

if (minutes + count > 60) {
  let sum = minutes + count;
  hours += parseInt(sum / 60);
  minutes = sum % 60;

  if (hours >= 24) hours -= 24;
} else minutes += count;

console.log(`${hours} ${minutes}`);