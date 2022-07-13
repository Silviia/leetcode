/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let p = 1;
    let countNeg = 0;
    
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] === 0)
            return signFunc(0);
        
        if (nums[i] < 0) 
            countNeg++;
    }
 
    p = (countNeg % 2 === 1) ? -1 : 1;
    
    return signFunc(p);
};

function signFunc(x) {
    if (x === 0)
        return 0;
    
    return x > 0 ? 1: -1;
}