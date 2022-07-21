/**
 * We are going to make use of this expression |arr1[i] - arr2[j]| <= d equals to arr1[i] - d <= arr2[j] <= arr1[i] + d
 * The values that are compliant are not in the range specified above
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    arr2.sort((a, b) => a - b);
    let distance = 0;
    
    for(let i = 0; i < arr1.length; i++) {
        if (isOutOfRange(arr2, arr1[i] - d, arr1[i] + d)) {
            distance++;
        }
    }
    
    return distance;
};
    
/**
 * Check if array doesn't contain any value in the range |arr1[i] - arr2[j]| <= d using binary search.
 */
function isOutOfRange(arr, from, to) {
    let start = 0;
    let end = arr.length - 1;
    
    while(start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (arr[mid] >= from && arr[mid] <= to) {
            return false;
        } else if (arr[mid] < from) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    return true;
}