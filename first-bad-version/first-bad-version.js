/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0, end = n;
        
        while (start <= end) {
            let pivot = start + Math.floor((end - start) / 2);
            if (!isBadVersion(pivot)) {
                start = pivot + 1;
            } else {
                end = pivot - 1;
            }
        }
        
        return start;
    };
};