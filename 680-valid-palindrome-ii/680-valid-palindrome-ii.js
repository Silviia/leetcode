/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;
    
    while (start < end) {
        if (s[start] !== s[end]) {
            return checkPalindrome(s, start, end - 1) || checkPalindrome(s, start + 1, end);
        }
        start += 1;
        end -= 1;
    }
    
    return true;
};

function checkPalindrome(s, start, end) {
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start += 1;
        end -= 1;
    }
    
    return true;
}