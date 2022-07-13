/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const n = mat.length, m = mat[0].length;
    
    if (r * c !== n * m)
        return mat;
    
    let outputMat = Array.from({length: r}, i => []);
    for (let i = 0; i < r*c; i ++) 
        outputMat[Math.floor(i / c)][i % c] = mat[Math.floor(i / m)][i % m];
        
    
    return outputMat;
};