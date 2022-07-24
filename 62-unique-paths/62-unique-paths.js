/**
 * Dynamic programming approach
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const matrix = [];
    
    for(let i = 0; i < m; i += 1) {
        matrix[i] = [];
        for(let j = 0; j < n; j += 1) {
            matrix[i][j] = 1;
        }
    }
    
    for(let i = 1; i < m; i += 1) {
        for(let j = 1; j < n; j += 1) {
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
        }
    }
    
    return matrix[m - 1][n - 1];
   
};


/**
 * Recursive approach
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePathsRec = function(m, n) {
    if (m === 1 || n === 1) {
        return 1;
    }
    
    return uniquePathsRec(m - 1, n) + uniquePathsRec(m, n - 1);
};