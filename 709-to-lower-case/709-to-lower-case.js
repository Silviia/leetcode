/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const map = {};
    let output = '';
    
    for(let i = 0; i < 26; ++i) {
        map[upper[i]] = lower[i];
    }
    
    for(let i = 0; i < s.length; i++) {
        if (map[s[i]] !== undefined) {
            output += map[s[i]];
        } else {
            output += s[i];
        }
    }
    
    return output;
};

