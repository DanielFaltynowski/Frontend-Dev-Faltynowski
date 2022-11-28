const myUsers = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
]
const nowa = myUsers.map(elem => {
    const obj = {}
    obj[elem.name] = elem.likes
    obj.age = elem.name.length * 10
    return obj
})

console.log(nowa)