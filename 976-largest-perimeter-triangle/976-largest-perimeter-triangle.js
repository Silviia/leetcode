/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = nums.length - 1; i >= 0 ; i--) {
        if (nums[i - 1] + nums[i] > nums[i + 1]) 
             return nums[i - 1] + nums[i] + nums[i + 1];
    }
    
    return 0;
};