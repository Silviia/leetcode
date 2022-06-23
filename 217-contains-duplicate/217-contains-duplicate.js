/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numsWithNoDuplicates = nums.reduce(function (previous, current) {
        if (previous.indexOf(current) === -1 ) 
            previous.push(current);
        return previous;
    }, []);
    
    return numsWithNoDuplicates.length !== nums.length; 
};