/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0, right = 0, max = 0,  freqMap = {}, freqMax = 0;
    
    for(let right = 0; right < s.length; right += 1) {
        freqMap[s[right]] = freqMap[s[right]] + 1 || 1;
        freqMax = Math.max(freqMap[s[right]], freqMax);
        
        if (right - left + 1 - freqMax > k) {
            freqMap[s[left]] -= 1;
            left += 1;
        }
        max = Math.max(right - left + 1, max);
    }
    
    return max;
};