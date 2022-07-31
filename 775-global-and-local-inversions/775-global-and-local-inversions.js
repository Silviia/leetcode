/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function(nums) {
    let min = nums.length;
    
    for (let i = nums.length - 1; i >= 2 ; i -= 1) {
        min = Math.min(min, nums[i]);
        if (nums[i - 2] > min) {
            return false;
        }
    }
    
    return true;
};