/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    nums.sort((a, b) => a - b);
    
    for(let i = 0; i <= nums.length; i ++) {
        if (getLowerBound(nums, i) === nums.length - i) {
            return i;
        }
    }
    
    return -1;
};

function getLowerBound(arr, pos) {
    let left = 0, right = arr.length;

    while(left < right) {
        let pivot = left + Math.floor((right - left) / 2);
        
        if (arr[pivot] < pos) {
            left = pivot + 1;
        } else {
            right = pivot;
        }
    }
    
    return left;
}