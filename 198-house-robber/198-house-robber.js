/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length; 
    
    // Handle empty array
    if (n === 0) {
        return 0;
    }
    
    let value1 = nums[0];
    if (n === 1) {
        return value1;
    }
    
    let value2 = Math.max(nums[0], nums[1]);
    if (n === 2) {
        return value2;
    }
    
    let maxVal = 0;
    // Dynamic programming calculation - no need for table
    // Just using two variables will suffice
    for (let i = 2; i < n; i += 1) {
        maxVal = Math.max(nums[i] + value1, value2);
        value1 = value2;
        value2 = maxVal;
    }
    
    return maxVal;
};