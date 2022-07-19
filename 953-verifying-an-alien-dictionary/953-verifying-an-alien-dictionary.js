/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const orderMap = {};
    for(let i = 0; i < order.length; i++) {
        orderMap[order[i]] = i;
    }
    
    for(let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (j >= words[i + 1].length) { // this cover the cases like 'apple' and app; when one previous word is bigger than one that follows
                return false;
            }
            
            if (words[i][j] !== words[i + 1][j]) {
                if (orderMap[words[i][j]] > orderMap[words[i + 1][j]]) {
                    return false;
                } else { // if we find the first different letter and they are sorted,
                    // then there's no need to check the remaining letters
                    break;
                }
            }
        }
    }
    
    return true;
};