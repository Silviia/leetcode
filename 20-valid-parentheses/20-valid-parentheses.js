/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {')' : '(', '}' : '{', ']' : '['}; 
    const stack = [];
    
    for(let i = 0; i < s.length; i += 1) {
        let char = s[i];
        
        if (map[char] !== undefined) { // if the current char is a closing bracket
            
            // Get the top element of the stack, if the stack is empty set a dummy value of "#"
            let topElement = stack.length === 0 ? '#' : stack.pop();
            
            // If the matching for this bracket doesn't match the stack's top element, return false
            if (topElement != map[char]) {
                return false;
            }
        } else {
            // If it was an opening bracket, push to the stack
            stack.push(char);
        }
    }
    
    return stack.length === 0;
};