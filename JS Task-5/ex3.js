function number(n) {
    let y = 0
    for (let i = 1; i <= n; i++) {
        let sum = 1
        for (let j = 1; j <= i; j++) {
            sum *= (i + j ** 2)
        }
        y += (i + 1) * sum
    }
    return y
}
console.log(number(2))