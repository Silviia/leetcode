/**
 * Solution is based on finding the characters frequency.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const map = {};
    const n = s.length;
    for(let i = 0; i < n; i += 1) {
        if (map[s[i]] !== undefined) {
            map[s[i]] += 1;
        } else {
            map[s[i]] = 1;
        }
        if (map[t[i]] !== undefined) {
            map[t[i]] -= 1;
        } else {
           map[t[i]] = -1;
        }
    }
    
    for(let i = 0; i < n; i += 1) {
        if(map[s[i]] !== 0 || map[t[i]] !== 0) {
            return false;
        }
    }
    
    return true;
};