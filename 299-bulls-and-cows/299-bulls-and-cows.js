/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    const mapSecret = {};
    let bulls = 0, cows = 0;
    
    for(let i = 0; i < secret.length; i += 1) {
        let char = secret[i];
        if (mapSecret[char] !== undefined) {
            mapSecret[char] += 1; // increase char frequency if it already exists
        } else {
            mapSecret[char] = 1; // initialize frequency
        }
    }
    
    for(let i = 0; i < guess.length; i += 1) {
        let char = guess[i];
        if (mapSecret[char] !== undefined) {
            if (char === secret[i]) { // chars match at same position
                bulls += 1;
                if (mapSecret[char] <= 0) {
                    cows -= 1;
                }
            } else {
                if (mapSecret[char] > 0) {
                    cows += 1;
                }
            }
            mapSecret[char] -= 1;
        }
    }
    
    return bulls + "A" + cows + "B";
};