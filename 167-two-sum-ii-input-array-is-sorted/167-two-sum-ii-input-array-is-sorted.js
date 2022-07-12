/**
 * Use two pointers to make use of the fact that array is sorted.
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1;
    
    while(left < right) {
        let sum = numbers[left] + numbers[right];
        
        if (sum === target)
            return [left + 1, right + 1];
        else if (sum < target)
            left ++;
        else 
            right --;
        
    }
    
    return [-1, -1]; // no solution
};