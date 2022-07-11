/**
 * Two pointers aproach: skip duplicates with fast pointer
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j ++) {
        if (nums[i] === nums[j]) 
            continue;
         
        i ++;
        nums[i] = nums[j];
    }
    
    return i + 1;
};