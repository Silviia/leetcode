/**
 * We know nums.length is replacing the missing number in the array. Therefore, we can 
 * initialize an integer with length of the array value and XOR it with every index and value.
 * In this case we will be left with the missing value.
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