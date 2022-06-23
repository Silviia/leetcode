/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const mapStoT = {};
    const mapTtoS = {};
    
    for (let i = 0; i < s.length; i++) {
        let c1 = s[i];
        let c2 = t[i];
        if (!mapStoT[c1] && !mapTtoS[c2]) { // no mapping exists for these characters
            mapStoT[c1] = c2;
            mapTtoS[c2] = c1;
        } else if (! (mapStoT[c1] === c2 && mapTtoS[c2] === c1)) // there is an existing mapping for these characters, but it doesn't match
            return false;
    }
    
    return true;
};