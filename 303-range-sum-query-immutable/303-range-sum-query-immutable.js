/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sum = [0];
    
    for(let i = 0; i < nums.length; i ++) {
        this.sum[i + 1] = this.sum[i] + nums[i];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.sum[right + 1] - this.sum[left];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */