/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length, n = matrix[0].length;
    let left = 0, right = m * n - 1;
    
    while(left <= right) {
        let pivot = left + Math.floor((right - left) / 2);
        let elem = matrix[Math.floor(pivot / n)][pivot % n];
        
        if (elem === target) {
            return true;
        } else if (elem < target) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
    }
    
    return false;
};