/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let minLen = Infinity;
    
    for(let i = 0; i < strs.length; i += 1) {
        minLen = Math.min(minLen, strs[i].length);
    }
    
    let low = 1, high = minLen;
    while(low <= high) {
        let middle = low + Math.floor((high - low) / 2);
        if (isCommonPrefix(strs, middle)) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }
    
    return strs[0].substring(0, Math.floor((low + high) / 2));
};

function isCommonPrefix(strs, len) {
    let str = strs[0].substring(0, len);

    for(let i = 1; i < strs.length; i += 1) {
        if (!strs[i].startsWith(str)) {
            return false;
        }
    }
    
    return true;
}