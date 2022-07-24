/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const map = {};
    
    for(let i = 0; i < words.length; i++) {
        map[words[i]] = map[words[i]] + 1 || 1;
    }
    
    const sorted = Object.keys(map).sort((a, b) => { 
        if (map[b] === map[a]) { 
            return a > b ? 1 : -1 
        }
        return map[b] - map[a];
    });
    
    return sorted.slice(0, k);
};