/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    let complement;
    
    for (let i = 0; i < nums.length; i++) {
        complement = target - nums[i];
       
        if (map[complement] !== undefined) {
            return [i, map[complement]];
        }
      
        map[nums[i]] = i;
    }
    
    return [];
};