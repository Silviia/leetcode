/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const leftMostIndex = findLeftMostIndex(nums, target);
    const rightMostIndex = findRightMostIndex(nums, target);
    
    return [leftMostIndex, rightMostIndex];
};


function findLeftMostIndex(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while(left <= right) {
        let pivot = left + Math.floor((right - left) / 2);
        if (nums[pivot] === target) {
            if (pivot === left || nums[pivot - 1] !== target) { // We found our lower bound 
                return pivot;
            }
            
            // Search on the left side
            right = pivot - 1;
        } else if (nums[pivot] < target) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
            
    }
    
    return -1;
}

function findRightMostIndex(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while(left <= right) {
        let pivot = left + Math.floor((right - left) / 2);
        if (nums[pivot] === target) {
            if (pivot === right || nums[pivot + 1] !== target) { // We found our upper bound 
                return pivot;
            }
            
            // Search on the right side
            left = pivot + 1;
        } else if (nums[pivot] < target) {
            left = pivot + 1;
        } else {
            right = pivot - 1;
        }
            
    }
    
    return -1;
}