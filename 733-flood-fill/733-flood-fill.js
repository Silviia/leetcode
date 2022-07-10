/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let startColor = image[sr][sc]; // color of the starting pixel
    
    if (startColor !== color)
        dfs(image, sr, sc, startColor, color);
    
    return image;
};

function dfs(image, i, j, startColor, newColor) {
    if (image[i][j] === startColor) {
        image[i][j] = newColor;
        
        if (i >= 1) 
            dfs(image, i - 1, j, startColor, newColor);
        
        if (j >= 1)
            dfs(image, i, j - 1, startColor, newColor);
        
        if (i + 1 < image.length)
            dfs(image, i + 1, j, startColor, newColor);
        
        if (j + 1 < image[0].length)
            dfs(image, i, j + 1, startColor, newColor);
    }
}