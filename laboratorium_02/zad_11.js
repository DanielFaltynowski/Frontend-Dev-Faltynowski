const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', input => {
    const temp = input.split(" ").map(elem => Number(elem))
    const res = temp.reduce((acc, elem) => {
        return acc + elem
    }, 0)
    console.log(res)
});