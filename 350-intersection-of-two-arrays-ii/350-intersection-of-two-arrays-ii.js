/**
 * Use a map for the smaller array and find all occurences.
 * Decresease count when element is found in the second array.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const n = nums1.length, m = nums2.length;
    
    if (n < m)
        return findIntersection(nums1, nums2);
    else 
        return findIntersection(nums2, nums1);
};

/**
 Assuming first passed array is the one with the smallest size for which we will keep a map.
 * @param {number[]} smaller array
 * @param {number[]} bigger array
 * @return {number[]} intersection array
 */
function findIntersection(nums1, nums2) {
    const map = {}, result = [];
    
    for (let i = 0; i < nums1.length; i++) {
        let elem1 = nums1[i];
        if (map[elem1] !== undefined)
            map[elem1]++;
        else 
            map[elem1] = 1;
    }
    
    for (let j = 0; j < nums2.length; j++) {
        let elem2 = nums2[j];
        if (map[elem2] !== undefined && map[elem2] !== 0) {
            map[elem2] --;
            result.push(elem2);
        }
    }
    
    return result;
}