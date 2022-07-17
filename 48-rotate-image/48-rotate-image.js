/**
 * Time complexity: O(N)
 * Space: O(1) - no additional data used
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    transpose(matrix);
    reverse(matrix);
};

function transpose(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let tmp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = tmp;
        }
    }
}

function reverse(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < n / 2; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[i][n - j - 1];
            matrix[i][n - j - 1] = tmp;
        }
    }
}