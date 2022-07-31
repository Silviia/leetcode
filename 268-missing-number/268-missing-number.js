/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let missingNumber = nums.length;
    
    for (let i = 0; i < nums.length; i += 1) {
        missingNumber ^= i ^ nums[i]; 
    }
    
    return missingNumber;
};