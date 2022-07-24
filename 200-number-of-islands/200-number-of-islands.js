/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid === null || grid.length === 0)
        return 0;
    
    let countIslands = 0;
    const nr = grid.length;
    const nc = grid[0].length;
   
    const dfs = (i, j) => {
        if (i >= 0 && j >= 0 && i < nr  && j < nc && grid[i][j] === '1') {
            grid[i][j] = '0';
            dfs(i - 1, j);
            dfs(i + 1, j);
            dfs(i, j - 1);
            dfs(i, j + 1);
        }
    };
    
    for(let i = 0; i < nr; i += 1) {
         for(let j = 0; j < nc; j += 1) {
            if (grid[i][j] === '1') {
                countIslands += 1;
                dfs(i, j);
              
            }
        }
    }
    
    return countIslands;
};