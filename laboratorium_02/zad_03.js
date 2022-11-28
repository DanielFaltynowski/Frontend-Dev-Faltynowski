const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
    const x = Number(input)
    const str = input.split('')
    const res = str.reduce((acc, elem) => {
        return acc + Math.pow(Number(elem), str.length)
    }, 0)
    console.log(x === res)
});