/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let p = 1;
    
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] === 0)
            return 0;
        
        p*= nums[i];
    }
    
    return signFunc(p);
};

function signFunc(x) {
    if (x === 0)
        return 0;
    
    return x > 0 ? 1: -1;
}