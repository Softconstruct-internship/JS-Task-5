function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
function Sum(x, n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += (i ** i * x ** i) / factorial(i)
    }
    return sum
}

console.log(Sum(2, 5))




