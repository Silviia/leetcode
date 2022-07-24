/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const output = []; // store the response
    
    if (s.length < p.length) {
        return output;
    }
    
    const pCount = {}; // map character to their frequency in p    
    for(let i = 0; i < p.length; i += 1) {
        if (pCount[p[i]] === undefined) {
            pCount[p[i]] = 1;
        } else {
            pCount[p[i]] += 1;
        }
    }
    
    let counter = Object.keys(pCount).length;
    let start = 0, end = 0;
    
    while(end < s.length) {
        let cEnd = s[end];
        if (pCount[cEnd] !== undefined) {
            pCount[cEnd] -= 1;
            
            if (pCount[cEnd] === 0) {
                counter -= 1;
            }
        }
        end += 1;
        
        while(counter === 0) {
            let cStart = s[start];
            if (pCount[cStart] !== undefined) {
                pCount[cStart] += 1;
                if (pCount[cStart] > 0) {
                    counter += 1;
                }
            }
            
            if (end - start === p.length) {
                output.push(start);
            }
            start += 1;
        }
    }
    
    return output;
};