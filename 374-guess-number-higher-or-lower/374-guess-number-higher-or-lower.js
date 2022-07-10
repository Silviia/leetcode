/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1, right = n, pivot;
    
    while (left <= right) {
        pivot = Math.floor((right + left) / 2);
        
        if (guess(pivot) === 0)
            return pivot;
        
        else if (guess(pivot) === -1) // guess is higher, we should search in the left side
            right = pivot - 1;
        else  // guess is smaller, we should search in the right side
            left = pivot + 1; 
    }
    
    return -1;
};