const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
];

const res = students.reduce((acc, elem) => {
    if (elem.grade >= 84 && elem.grade <= 95) {
        acc.push(elem)
    }
    return acc
}, [])

console.log(res)