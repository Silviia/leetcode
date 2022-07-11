/**
 * Two pointers aproach 
 * Time complexity O(n)
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0, right = nums.length - 1;
    let result = [];
    
    for (let i = nums.length - 1; i >= 0; i --) {
        let square;
        
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            square = Math.abs(nums[right]);
            right--;
        } else {
            square = Math.abs(nums[left]);
            left++;
        }
        
        result[i] = square * square;
    }
    
    return result;
};