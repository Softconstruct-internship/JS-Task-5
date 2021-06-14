// page 124 ex-43
let arr = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 10, 8],
    [4, 5, 6, 7, 8]
]
matrix: for (let i = 0; i < arr.length; i++) {
    let sum = arr[i][0]
    for (let j = 0; j < arr[i].length - 1; j++) {
        if (arr[i][j] > arr[i][j + 1]) {
            continue matrix;
        }
        sum += arr[i][j + 1]
    }
    console.log(sum)
}