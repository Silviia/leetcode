/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let result = 0, sign = 1, index = 0;
    const maxInteger = Math.pow(2, 31) - 1;
    const minInteger = -Math.pow(2, 31);
    
    // We need to discard any leading 0s and spaces from the beginning of input string
    while(index < s.length && s[index] === ' ') {
          index += 1;
    }
    
    if (index < s.length && s[index] === '+') {
        sign = 1;
        index += 1;
    } else if (index < s.length && s[index] === '-') {
        sign = -1;
        index += 1;
    }
    
    // Traverse string and stop if current item is not a digit
    while(index < s.length && !isNaN(s[index]) && s[index] !== ' ') {
        let digit = s[index] - '0';
        
        // Check underflow and overflow 
        if (result > Math.floor(maxInteger / 10) || (result === Math.floor(maxInteger / 10) && digit > maxInteger % 10)) {
            return sign === 1 ? maxInteger : minInteger;
        }
        
        result  = result * 10 + digit;
        index += 1;
    }
    
    return sign * result;
};