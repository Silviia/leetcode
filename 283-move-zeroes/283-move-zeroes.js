/**
 * Modify the existing array using two pointers aproach.
 * Additional pointer will be used to keep track of non zero elements.
 * Space complexity: O(1), only constant space is used.
 * Time complexity: O(n), not the most optimal solution when most elements of the array are 0s
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {    
    for (let indxNonZero = 0, curr = 0; curr < nums.length; curr ++) {
        if (nums[curr] !== 0) {
            let temp = nums[indxNonZero];
            nums[indxNonZero] = nums[curr];
            nums[curr] = temp;
            indxNonZero ++;
        }
    }   
};


/**
 * Modify the existing array using two pointers aproach.
 * Additional pointer will be used to keep track of non zero elements.
 * Space complexity: O(1), only constant space is used.
 * Time complexity: O(n), not the most optimal solution when most elements of the array are 0s
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroesSecondApproach = function(nums) {
    let indxNonZero = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[indxNonZero] = nums[i];
            indxNonZero ++;
        }
    }
    
    for (let i = indxNonZero; i < nums.length; i++)
        nums[i] = 0;
        
};

/**
 * Second aproach: Modify the existing array using two pointers.
 * Additional pointer will be used to keep track of non zero elements.
 * Space complexity: O(1), only constant space is used.
 * Time complexity: O(n), not the most optimal solution when most elements of the array are 0s
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroesSecondApproach = function(nums) {
    let indxNonZero = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[indxNonZero] = nums[i];
            indxNonZero ++;
        }
    }
    
    for (let i = indxNonZero; i < nums.length; i++)
        nums[indxNonZero] = 0;
        
};

/**
 * First approach, keeping an extra array.
 * Space complexity: O(n)
 * Time complexity: O(n) 
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroesFirstApproach = function(nums) {
    let countZeroes = 0;
    let arr = [];
    
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] === 0)
            countZeroes ++;
        else
            arr.push(nums[i]);
    }
    
    if (countZeroes > 0) {
       for (let j = 0; j < countZeroes; j ++) 
           arr.push(0);
        
        for (let k = 0; k < nums.length; k ++)
            nums[k] = arr[k];
    }
        
};