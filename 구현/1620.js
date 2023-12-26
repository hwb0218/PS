const [input, ...data] = [
  '26 5',
  'Bulbasaur',  'Ivysaur',    'Venusaur',
  'Charmander', 'Charmeleon', 'Charizard',
  'Squirtle',   'Wartortle',  'Blastoise',
  'Caterpie',   'Metapod',    'Butterfree',
  'Weedle',     'Kakuna',     'Beedrill',
  'Pidgey',     'Pidgeotto',  'Pidgeot',
  'Rattata',    'Raticate',   'Spearow',
  'Fearow',     'Ekans',      'Arbok',
  'Pikachu',    'Raichu',     '25',
  'Raichu',     '3',          'Pidgey',
  'Kakuna'
];

const [n, m] = input.split(' ').map(Number);

const pocketMap = new Map();
const pocketArr = Array(n).fill('');

for (let i = 0; i < n; i++) {
  pocketMap.set(data[i], i + 1);
  pocketArr[i + 1] = data[i];
}

let ret = [];

for (let i = n; i < n + m; i++) {
  if (isNaN(data[i])) {
    ret.push(pocketMap.get(data[i]));
  } else {
    ret.push(pocketArr[Number(data[i])]);
  }
}

console.log(ret.join('\n'));

// const ret = data.reduce((acc, cur, i) => {
//   return acc.set(i, cur);
// }, new Map());

// console.log(ret);