/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g,'');
    
    for(let i = 0, j = s.length - 1; i < j; i += 1, j -= 1) {
        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
    }
    
    return true;
};

