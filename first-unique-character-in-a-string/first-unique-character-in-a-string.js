/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = {}; // map frequency of characters
    for(let i = 0; i < s.length; i += 1) {
        map[s[i]] = map[s[i]] + 1 || 1;
    }
    
    for(let i = 0; i < s.length; i += 1) {
        if (map[s[i]] === 1) {
            return i;
        }
    }
    
    return -1;
};