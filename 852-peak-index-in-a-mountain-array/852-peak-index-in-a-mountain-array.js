/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let low = 0, high = arr.length - 1;
    
    while (low < high) {
        let pivot = Math.floor(low + (high - low) / 2);
        
        if (arr[pivot] < arr[pivot + 1])
            low = pivot + 1;
        else 
            high = pivot;
    }
    
    return low;
};