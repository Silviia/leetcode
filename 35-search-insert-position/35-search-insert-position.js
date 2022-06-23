/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1, ans = 0;
    
    while (left <= right) {
        let pivot = Math.floor((left + right) / 2);
        
        if (nums[pivot] === target) 
            return pivot;
        
        if (target < nums[pivot]) {
            ans = pivot;
            right = pivot - 1;
        } else {
            ans = pivot + 1;
            left = pivot + 1;
        }
    }
    
    return ans;
};