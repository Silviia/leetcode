/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Set p1 and p2 to point at the end of each array
    let p1 = m - 1;
    let p2 = n - 1;
    
    for (let p = m + n - 1; p >= 0; p -= 1) {
        if (p2 < 0) {
            break;
        }
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1 -= 1;
        } else {
            nums1[p] = nums2[p2];
            p2 -= 1;
        }
    }
};