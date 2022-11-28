const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Udało się!")
    }, 3000)
})

myPromise.then((val) => {
    console.log(val)
})