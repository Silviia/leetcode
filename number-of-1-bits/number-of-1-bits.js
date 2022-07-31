/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let countBits = 0;
    let mask = 1;
    
    for (let i = 0; i < 32; i += 1) {
        if ((n & mask) !== 0) {
            countBits += 1;
        }
        
        mask = mask << 1;
    }
    
    return countBits;
};