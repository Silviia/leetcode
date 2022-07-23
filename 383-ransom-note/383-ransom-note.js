/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const mapMagazine = {}; // for characters frequency
    
    for(let i = 0; i < magazine.length; i += 1) {
        if (mapMagazine[magazine[i]] === undefined) {
            mapMagazine[magazine[i]] = 1;
        } else {
            mapMagazine[magazine[i]] += 1;
        }
    }
    
    for(let i = 0; i < ransomNote.length; i += 1) {
        if (mapMagazine[ransomNote[i]] !== undefined && mapMagazine[ransomNote[i]] > 0) {
            mapMagazine[ransomNote[i]] -= 1;
        } else {
            return false;
        }
    }
    
    return true;
};