/**
 * Dymanic programming, space optimization - constant space to keep the last three Fibonacci numbers
 * Time complexity O(n)
 * 
 *
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (n === 0)
        return 0;
    
    if (n === 1 || n === 2)
        return 1;
    
    let x = 0, y = 1, z = 1, tmp;
    for (let i = 3; i <= n; i ++) {
        tmp = x + y + z;
        x = y;
        y = z;
        z = tmp;
    }
    
    return z;
};


/**
 * Iterative solution, time and space complexity O(n)
 * Bottom-top aproach
 *
 * @param {number} n
 * @return {number}
 */
var tribonacciIterative = function(n) {
    if (n === 0)
        return 0;
    
    if (n === 1 || n === 2)
        return 1;
    
    let result = {0: 0, 1: 1, 2: 2};
    for (let i = 3; i <= n; i++)
        result[i] = result[i - 3] + result[i - 2] + result[i - 1];
  
    return result[n];
};