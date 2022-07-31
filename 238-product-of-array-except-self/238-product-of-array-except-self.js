/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output = [];
    
    //Calculating prefix product
    output[0] = 1;
    for (let i = 1; i < nums.length; i += 1) {
        output[i] = output[i - 1] * nums[i - 1];
    }

    // Calculating sufix product
    let right = 1;
    for (let i = nums.length - 1; i >= 0; i -= 1) {
        output[i] = output[i] * right;
        right = right * nums[i];
    }
    
    return output;
};