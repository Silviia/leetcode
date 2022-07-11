/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = {};
   
    for (let i = 0; i < nums.length; i ++) {
        let currentVal = nums[i];
        if (map[currentVal] !== undefined) 
            map[currentVal]++;
        else 
            map[currentVal] = 1;
    }
    
    for (const [key, value] of Object.entries(map)) 
        if (value === 1)
            return key;
    
    return -1;
};