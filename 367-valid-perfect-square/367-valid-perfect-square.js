/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num < 2)
        return true;
    
    let left = 2, right = Math.floor(num/2);
    
    while (left <= right) {
        let x = Math.floor((left + right) / 2);
        let square = x * x;
        
        if (square === num)
            return true;
        
        if (square < num)
            left = x + 1;
        else 
            right = x - 1;
    }
    
    return false;

};