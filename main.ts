function prove (n: number) {
    if (n % 2 == 0) {
        n = even(n)
    } else {
        n = odd(n)
    }
    return n
}
function odd (n: number) {
    n = 3 * n + 1
    return n
}
function even (n: number) {
    n = n / 2
    return n
}
let n = 0
n = randint(0, 100)
basic.showNumber(n)
basic.forever(function () {
    n = prove(n)
    basic.showNumber(n)
    basic.pause(100)
})
