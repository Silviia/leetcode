/*********** Two Pointers Approach ***********/
/**
 * Use two pointers to iterate through the strings in reverse. If we see a backspace char, the next non-backspace char is skipped.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let i = s.length - 1, j = t.length - 1;
    let skipS = 0, skipT = 0;
    
    while(i >= 0 || j >= 0) {
        while(i >= 0) { // Find position of valid char in s
            if (s[i] === '#') {
                skipS += 1;
                i -= 1;
            } else if (skipS > 0) {
                skipS -= 1;
                i -= 1;
            } else {
                break;
            }
        }
        
        while(j >= 0) { // Find position of valid char in t
            if (t[j] === '#') {
                skipT += 1;
                j -= 1;
            } else if (skipT > 0) {
                skipT -= 1;
                j -= 1;
            } else {
                break;
            }
        }
        
        // Check if the valid value from first string is different from the one in the second string
        if (i >= 0 && j >= 0 && s[i] !== t[j]) {
            return false;
        }
        
        // Check if we have the same amount of valid characters in both strings
        if ((i >= 0) !== (j >= 0)) { 
            return false;
        }
        
        i -= 1;
        j -= 1;
    }
    
    return true;
};



/*********** Build String Approach ***********/
/**
 * Build string using a stack
 * Time, space complexity O(M + N), where m and n are the lengths of string s and t respectively
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompareStack = function(s, t) {
  return interpret(s) === interpret(t);  
};

function interpret(s) {
    const stack = [];
    
    for(let i = 0; i < s.length; i += 1) {
        if (s[i] !== '#') {
            stack.push(s[i]);
        } else if (stack.length !== 0) {
            stack.pop();
        }
    } 
    
    return stack.toString();
}