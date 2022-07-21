/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) {
        return x;
    }
    
    let left = 2;
    let right = Math.floor(x / 2);
    
    while(left <= right) {
        let num = left + Math.floor((right - left) / 2);
    
        if (num * num === x) {
            return num;
        } else if (num * num < x) {
            left = num + 1;
        } else {
            right = num - 1;
        }
    }
    
    return right;
};