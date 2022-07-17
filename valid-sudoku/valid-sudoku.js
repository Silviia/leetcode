/**
 * Use sets to store the status for seen values on each row, column and box
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = new Set(), cols = new Set(), boxes = new Set();
    
    for (let i = 0; i < 9; i ++) {
        rows[i] = new Set();
        cols[i] = new Set();
        boxes[i] = new Set();
    }
    
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let val = board[r][c];
            
            if (val === '.') { // Empty cell
                continue;
            }
            
            // Check the row to see if value was already encountered 
            if (rows[r].has(val)) {
                return false;
            }
            
            rows[r].add(val);
            
            // Check the column to see if value was already encountered
            if (cols[c].has(val)) {
                return false;
            }
            
            cols[c].add(val);
            
            // Check the box to see if value was already encountered
            let idx = Math.floor(r/3) * 3 + Math.floor(c/3);
            
            if (boxes[idx].has(val)) {
                return false;
            }
            
            boxes[idx].add(val);
        }
    }
    
    return true;
};

