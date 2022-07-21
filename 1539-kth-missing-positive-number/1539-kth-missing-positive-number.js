/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let left = 0, right = arr.length - 1;
    
    while(left <= right) {
        let pivot = left + Math.floor((right - left) / 2);
        let countMissingValues = arr[pivot] - pivot - 1;
       
        if (countMissingValues < k) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
    }
    
    // At the end of the loop, left = right + 1
    // the missing kth element is between arr[right] and arr[left]
    // number of ints missing before arr[right] is arr[right] - right - 1 =>
    // arr[right] + k - (arr[right] - right - 1) = k + right + 1 = k + left
    return left + k;
};