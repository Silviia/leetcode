/**
 * Use an additional array - position in new array will be (i+k)%nums.length
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const arr = [];
    const n = nums.length;
    
    for (let i = 0; i < n; i ++) {
        let curr = nums[i];
        arr[(i + k) % n] = nums[i];
    }
    
    for (let j = 0; j < n; j ++) 
        nums[j] = arr[j];
};

/**
 * Rotate using same array. 
 * Time complexity O(nk). Space O(1)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotateSameArray = function(nums, k) {
    let temp, previous;
    k %= nums.length; 
    
    for (let i = 0; i < k; i ++) { 
        previous = nums[nums.length - 1];
        for (let j = 0; j < nums.length; j++) {
            temp = nums[j];
            nums[j] = previous;
            previous = temp;
        }
    }
};