/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    
    for(const row of grid) {
        const index = firstNegativeIndex(row);
        count += row.length - index;
    }
    
    return count;
};

function firstNegativeIndex(arr) {
    let left = 0, right = arr.length - 1;
    
    while(left <= right) {
        let pivot = left + Math.floor((right - left) / 2);
        
        if (arr[pivot] < 0) {
            right = pivot - 1;
        } else {
            left = pivot + 1;
        }
    }
    
    return left;
}