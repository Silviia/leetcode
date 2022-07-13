/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let sign = 1;
    let countNeg = 0;
    
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] === 0) {
            sign = 0;
            break;
        }
        
        if (nums[i] < 0) 
            sign = -sign;
    }
    
    return signFunc(sign);
};

function signFunc(x) {
    if (x === 0)
        return 0;
    
    return x > 0 ? 1: -1;
}