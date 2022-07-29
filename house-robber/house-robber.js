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
    
    let robNext = nums[n - 1];
    let robNextPlusOne = 0;
    
    // Dynamic programming calculation - no need for table
    // Just using two variables will suffice
    for (let i = n - 2; i >= 0; i -= 1) {
        let current = Math.max(robNext, robNextPlusOne + nums[i]);
        robNextPlusOne = robNext;
        robNext = current;
    }
    
    return robNext;
};