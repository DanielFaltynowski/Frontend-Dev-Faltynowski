const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
    const splitted = (input.split(" ")).map((elem) => Number(elem))
    const res = splitted.reduce((acc, elem) => {
        return acc + elem
    }, 0)
    console.log(res)
});