const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', input1 => {
    rl.on('line', input2 => {
        const sec = Number(input1)
        const planet = input2

        switch (planet) {
            case "Merkury":
                // const time = (365.25 * 0.2408467) * 24 * 60 * 60
                console.log(Math.round(sec/((365.25 * 0.2408467) * 24 * 60 * 60) * 100) / 100)
                break
            case "Wenus":
                // const time = (365.25 * 0.61519726) * 24 * 60 * 60
                console.log(Math.round(sec/((365.25 * 0.61519726) * 24 * 60 * 60) * 100) / 100)
                break
            case "Ziemia":
                // const time = 365.25 * 24 * 60 * 60
                console.log(Math.round(sec/(365.25 * 24 * 60 * 60) * 100) / 100)
                break
            case "Mars":
                // const time = (365.25 * 1.8808158) * 24 * 60 * 60
                console.log(Math.round(sec/((365.25 * 1.8808158) * 24 * 60 * 60) * 100) / 100)
                break
            case "Jowisz":
                // const time = (365.25 * 11.862615) * 24 * 60 * 60
                console.log(Math.round(sec/((365.25 * 11.862615) * 24 * 60 * 60) * 100) / 100)
                break
            case "Saturn":
                // const time = (365.25 * 29.447498) * 24 * 60 * 60
                console.log(Math.round(sec/((365.25 * 29.447498) * 24 * 60 * 60) * 100) / 100)
                break
            case "Uran":
                // const time = (365.25 * 84.016846) * 24 * 60 * 60
                console.log(Math.round(sec/((365.25 * 84.016846) * 24 * 60 * 60) * 100) / 100)
                break
            case "Neptun":
                // const time = (365.25 * 164.79132) * 24 * 60 * 60
                console.log(Math.round(sec/((365.25 * 164.79132) * 24 * 60 * 60) * 100) / 100)
                break

        }
    });
});