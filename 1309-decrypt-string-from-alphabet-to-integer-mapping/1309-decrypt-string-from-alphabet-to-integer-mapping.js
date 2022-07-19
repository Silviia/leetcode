/**
 * Use a stack and a map for letters. Map is easy to create knowing that the ascii code starts from 97 for 'a'.
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const map = {};
    for(let i = 1; i <= 26; ++i) {
        map[i] = String.fromCharCode(96 + i);
    }
  
    const stack = [];
    for(const char of s) {
        if (char !== '#') {
            stack.push(char);
            continue;
        }
        const digit = stack.pop();
        stack.push(map[stack.pop() + digit]);
    }
    
    let response = '';
    for(const char of stack) {
        response += char <= '9' ? map[char] : char;
    }
    
    return response;    
};