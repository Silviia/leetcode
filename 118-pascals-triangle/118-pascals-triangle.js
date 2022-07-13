/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows === 1)
        return [[1]];
    
    const pascalTriangle = [[1]];
  
    for (let i = 1; i < numRows; i++) {
        const prevRow = pascalTriangle[pascalTriangle.length - 1];
        const shiftLeft = [...prevRow, 0];
        const shiftRight = [0, ...prevRow];
        
        const currentRow = shiftLeft.map((r, i) => r + shiftRight[i]);
        pascalTriangle.push(currentRow);
    }
    
    return pascalTriangle;
};