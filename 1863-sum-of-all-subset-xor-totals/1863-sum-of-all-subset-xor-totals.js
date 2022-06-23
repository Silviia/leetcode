/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    return xORSum(0, 0, nums);
};

function xORSum(i, x, nums) {
    // end of the array
    if (i === nums.length)
        return x;
    
    let previous = xORSum(i+1, x, nums);
    let current = xORSum(i+1, x^nums[i], nums);
    
    return previous + current;
}