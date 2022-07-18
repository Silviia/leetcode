/**
 * Using a brute force aproach
 * Time complexity: O(MxN)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const response = [];
    let j;
    
    for(let i = 0; i < nums1.length; i++) {
       let found = false;
        for (j = 0; j < nums2.length; j++) {
            if (nums2[j] === nums1[i]) {
                found = true;
            }
            
            if (found && nums2[j] > nums1[i]) {
                response[i] = nums2[j];
                break;
            }
        }
        if (j === nums2.length) {
            response[i] = -1;
        }
    }
    
    return response;
};