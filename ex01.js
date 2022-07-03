const { interval } = require("rxjs")

const obs$ = interval(1000)
const obs2$ = interval(1000)

const subs1 = obs$.subscribe(num => {
    console.log(num)
})

const subs2 = obs$.subscribe(num => {
    console.log(num)
})

setTimeout(() => {
    subs1.unsubscribe()
    subs2.unsubscribe()
}, 6000)