/**
 * Assuming that the answer is k, we've managed to complete k rows of coins.
 * These completed rows contain in total 1 + 2 + 3 + .. + k = k*(k + 1) / 2
 * We could reformulate the problem as finding the max k, such as k(k + 1) / 2 < = n 
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 0, right = n;
    
    while(left <= right) {
        let pivot = left + Math.floor((right - left) / 2);
        let curr = Math.floor(pivot * (pivot + 1) / 2);
        
        if (curr === n) {
            return pivot;
        } else if (curr < n) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
    }
    
    return right;
};