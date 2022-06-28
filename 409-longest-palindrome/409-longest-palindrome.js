/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // Use a set and remove pairs while traversing the string
    const charSet = new Set();
    
    for (let i = 0; i < s.length; i ++)  {
        let currChar = s.charAt(i);
        if (charSet.has(currChar)) 
            charSet.delete(currChar);
        else 
            charSet.add(currChar);
    }
    
    if (charSet.size <= 1) return s.length;
    
    return s.length - charSet.size + 1;
};