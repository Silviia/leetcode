/**
 *
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    
    while (n !== 0) {
        count ++;
        n = n & (n - 1);
    }
    
    return count;
};

/**
 * Loop and flip using a mask 
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeightWithMask = function(n) {
    let count = 0;
    let mask = 1;
    
    for (let i = 0; i < 32; i ++) {
        if ((n & mask) !== 0)
            count ++;
        
        mask = mask << 1;
    }
    
    return count;
};