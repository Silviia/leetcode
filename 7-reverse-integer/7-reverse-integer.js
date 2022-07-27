/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var maxInteger = Math.pow(2, 31) - 1;
    var minInteger = (-(Math.pow(2, 31)));
    let revX = 0;
    
    while(x != 0) {
        let digit = x % 10;
        x = x / 10 >> 0;
        
        if (revX < minInteger / 10 || (revX === minInteger / 10 && digit < -8)) {
            return 0;
        }
        
        if (revX > maxInteger / 10 || (revX === maxInteger / 10 && digit > 7)) {
            return 0;
        }
        
        revX = revX * 10 + digit;
    }
    
    return revX;
};