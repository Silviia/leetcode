/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const mapValues = {'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1, 'CM': 900, 'CD': 400, 'XC': 90, 'XL': 40, 'IX': 9, 'IV': 4};
    let sum = 0, i = 0;
    while (i < s.length) {
        if (i < s.length - 1) {
            let doubleSymbol = s.substring(i, i + 2);
            // Check map for 2 length symbol
            if (mapValues[doubleSymbol] !== undefined) {
                sum += mapValues[doubleSymbol];
                i += 2;
                continue;
            }
        }
        
        // Otherwise it must be a single symbol case
        let singleSymbol = s.substring(i, i + 1);
        sum += mapValues[singleSymbol];
        i += 1;
    }
    return sum;
};