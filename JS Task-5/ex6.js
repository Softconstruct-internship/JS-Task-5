// page 123 ex-41

const arr = [
    [4, 5, 6],
    [6, 3, 2],
    [10, 8, 1]
]
for (let i = 0; i < arr.length; i++) {
    let min = arr[0][i]
    for (let j = 0; j < arr[i].length; j++) {
        if (min > arr[j][i]) {
            min = arr[j][i]
        }
    }
    console.log(min)
}
