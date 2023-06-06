let a = [
    [1, 2, 3, 4, 5, 6, 7, 4, 9, 10],
    [2, 2, 3, 4, 5, 6, 7, 2, 9, 4],
    [3, 2, 3, 4, 5, 6, 7, 8, 2, 10],
    [4, 6, 3, 4, 5, 6, 4, 8, 9, 2],
    [5, 5, 3, 4, 5, 4, 7, 8, 9, 5],
    [6, 4, 3, 4, 5, 2, 7, 8, 9, 4],
    [7, 3, 3, 4, 5, 6, 7, 2, 9, 10],
    [8, 2, 3, 4, 5, 6, 7, 8, 9, 10],
];

function totalmatrix(array, b) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] == b) {
                count += 1;
            }
        }
    }
    return count;
}
console.log(totalmatrix(a, 10));