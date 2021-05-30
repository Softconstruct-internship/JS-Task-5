function number(n, m) {
    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum += Math.pow(i, i)
    }
    return sum
}
console.log(number(2, 4))


