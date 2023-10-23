let input = ['0 30'];

let hours = Number(input[0].split(' ')[0]);
let minutes = Number(input[0].split(' ')[1]);

if (minutes < 45) {
  hours -= 1;
  minutes += 15;

  if (hours < 0) hours = 23;
} else {
  minutes -= 45;
}

console.log(`${hours} ${minutes}`);