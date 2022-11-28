const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', input => {
    const truth = input.split("").every(elem => {
        return Number(elem) !== NaN
    })
    if (truth) {
        const tab = Array.from({length: Number(input)}, (_, i) => i + 1)
        const tab_rev = []
        tab.forEach(elem => {
            tab_rev.unshift(elem)
        })

        // console.log(tab, tab_rev)
        tab.forEach(elem => {
            console.log("*".repeat(elem))
        })
        tab_rev.forEach(elem => {
            console.log("*".repeat(elem))
        })
        tab.forEach(elem => {
            console.log(" ".repeat(elem - 1) + "*".repeat((tab.length + 1) - elem))
        })
        tab_rev.forEach(elem => {
            console.log(" ".repeat(elem - 1) + "*".repeat((tab.length + 1) - elem))
        })
    }
});