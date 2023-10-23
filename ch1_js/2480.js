inputs = ['3 3 6', '2 2 2', '6 2 5'];

for (let i = 0; i < inputs.length; i++) {
  let result = 0;
  const [a, b, c] = inputs[i].split(' ').map(Number);

  if (a === b && b === c) result = 10_000 + a * 1_000;
  else if (a === b) result = 1_000 + a * 100;
  else if (a === c) result = 1_000 + c * 100;
  else if (b === c) result + 1_000 + b * 100;
  else {
    const max = Math.max(...[a, b, c]);
    result = max * 100;
  }
  console.log(result);
}