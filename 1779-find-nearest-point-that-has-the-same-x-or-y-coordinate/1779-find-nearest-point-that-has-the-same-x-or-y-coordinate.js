/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {
    let index = -1;
    let minDistance = Infinity;
   
    for (let i = 0; i < points.length; i++) {
        let point = points[i];
        let distance;
        
        if (point[0] === x || point[1] === y)
            distance = Math.abs(x - point[0]) + Math.abs(y - point[1]);
        
        if (distance < minDistance) {
            minDistance = distance;
            index = i;
        }
    }
    
    return index;      
};