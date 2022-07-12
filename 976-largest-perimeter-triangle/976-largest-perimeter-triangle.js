/**
 * Find largest perimeter by first sorting the array.
 * Valid triangle if the sum of two sides is bigger than the third.
 * Since array is sorted we can take advantage of that to return the max perimeter.
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