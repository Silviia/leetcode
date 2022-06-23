/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = {};
    let containsDuplicates = false;
    for (let i = 0; i < nums.length; i ++) {
        let val = nums[i]; 
        if (!map[val]) 
            map[val] = 1;
        else {
            containsDuplicates = true;
            break;
        }
    }
    return containsDuplicates;
};