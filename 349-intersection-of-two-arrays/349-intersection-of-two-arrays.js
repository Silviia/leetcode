/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1), set2 = new Set(nums2);
    const n = set1.size, m = set2.size;
    
    if (n < m) 
        return findIntersection(set1, set2);
    else 
        return findIntersection(set2, set1);
};

function findIntersection(set1, set2) {
    const result = [];
    for (const item of set1.values()) {
        if (set2.has(item))
            result.push(item);
    }
    
    return result;
}