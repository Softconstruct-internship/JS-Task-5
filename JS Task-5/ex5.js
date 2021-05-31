function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
function Sum(x, n) {
    let sum = 0
    let y = 1
    let fuc1 = 1 / factorial(n);
    for (let i = 1; i <= n; i++) {
        y = factorial(2 * i ** 2 + 1)
        sum += fuc1 + (-1) ** i * y;
    }
    return sum
}
console.log(Sum(2, 5))

