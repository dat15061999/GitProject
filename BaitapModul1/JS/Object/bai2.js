let a = [
    [1, 2, 3, 4, 5, 6, 7, 4, 9, 10],
    [2, 2, 3, 4, 5, 6, 7, 2, 9, 4],
    [3, 2, 3, 4, 5, 6, 7, 8, 2, 10],
    [4, 6, 3, 4, 5, 6, 4, 8, 9, 2],
    [5, 5, 3, 4, 5, 4, 7, 8, 9, 5],
    [6, 4, 3, 4, 5, 2, 7, 8, 9, 4],
    [7, 3, 3, 4, 5, 6, 7, 2, 9, 10],
    [8, 2, 3, 4, 5, 6, 7, 8, 9, 10],
]
function totalmatrix(array) {
    let total = [];
    for (let i = 0; i < array.length; i++) {
        total[i] = 0;
        for (let j = 0; j < array[i].length; j++) {
            total[i] += array[i][j];
        }
    }
    return total;
}
console.log(totalmatrix(a));