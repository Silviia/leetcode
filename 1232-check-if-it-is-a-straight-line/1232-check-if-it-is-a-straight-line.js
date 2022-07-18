/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if (coordinates.length === 2) {
        return true;
    }
    
    const x0 = coordinates[0][0];
    const y0 = coordinates[0][1];
    const x1 = coordinates[1][0];
    const y1 = coordinates[1][1];
    const dx = x1 - x0;
    const dy = y1 - y0;
    
    for(let i = 2; i < coordinates.length; i ++) {
        let coord = coordinates[i];
        let x = coord[0];
        let y = coord[1];
        
        if ((y - y1) * dx !== dy * (x - x1)) {
            return false;
        }
    }
    
    return true;
};