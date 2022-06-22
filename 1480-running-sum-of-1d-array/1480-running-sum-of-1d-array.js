/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {    
    for (let i = 1; i < nums.length; i++) 
        nums[i] += nums[i-1];
    
    return nums;
};

var runningSumNewArray = function(nums) {
    const result = new Array(nums.length);
    
    result[0] = nums[0];
    for (let i = 1; i < nums.length; i++)
        result[i] = result[i-1] + nums[i];
    
    return result;
};