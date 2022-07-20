/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length)
        return false;
    
    const map = {};
    for(let i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) {
             map[s[i]] = 1;
        } else {
            map[s[i]] += 1;
        }
        if (map[t[i]] === undefined) {
             map[t[i]] = -1;
        } else {
            map[t[i]] -= 1;
        }
    }
    
    for(const [key, value] of Object.entries(map)) {
        if (value !== 0) {
            return false;
        }
    }
    
    return true;
};