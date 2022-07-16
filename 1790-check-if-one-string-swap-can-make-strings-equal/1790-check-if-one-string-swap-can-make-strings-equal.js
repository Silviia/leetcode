/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1 === s2)
        return true;
  
    let countMismatch = 0;
    let ch1, ch2, swap = false;
    
    for (let i = 0; i < s1.length; i ++) {
        if (countMismatch > 2)
            return false;
        
        if (s1[i] !== s2[i]) {
            countMismatch ++;

            if (countMismatch === 1) {
                ch1 = s1[i];
                ch2 = s2[i];
            }
        }
       
        if (countMismatch === 2 && s1[i] === ch2 && s2[i] === ch1) 
            swap = true;
    }
    
    return countMismatch === 2 && swap === true;
};