/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xOr = x ^ y;
    let distance = 0;
    
    while (xOr !== 0) {
        distance += 1;
        // remove the rightmost bit of '1'
        xOr = xOr & (xOr - 1);
    }
    
    return distance;
};