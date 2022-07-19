/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let chVal = 0; // 0 when XORed with any bit would not change the bit value
    
    // XOR all the characters of both s and t
    for (let i = 0; i < t.length; i ++) {
        let sChVal = s.charCodeAt(i) ?? 0;
        chVal ^= sChVal ^ t.charCodeAt(i) ;
    }
    
    // The difference is what is left after XORing since x^x=0
    return String.fromCharCode(chVal);
};