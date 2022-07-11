/**
 * Fibonacci aproach keeping 3 variables only. Break the problem into subproblems.
 * Optimal solution can be constructed efficiently from optimal solution to its subproblems.
 * Time O(n) and space complexity O(1) [ single loop and constant space]
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1)
        return 1;
    
    let first = 1, second = 2, third;
    for (let i = 3; i <= n; i ++) {
        third = first + second;
        first = second;
        second = third;
    }
    
    return third;
};


/**
 * Dynamic Programming. Break the problem into subproblems.
 * Optimal solution can be constructed efficiently from optimal solution to its subproblems.
 * Time and space complexity: O(n) [ single loop and an array of size n is used]
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
   if (n === 1)
       return 1;
    
    const cache = {};
    cache[1] = 1;
    cache[2] = 2;
    for (let i = 3; i <= n ; i ++)
        cache[i] = cache[i - 1] + cache[i - 2];
    
    return cache[n];
};


/**
 * Recursion solution with memoization.
 * Time and space complexity O(n) [size of recursion tree can go upto n and the depth of it also]
 * @param {number} n
 * @return {number}
 */
var climbStairsRecursive = function(n) {
    var cache = {};
    return climb(0, n, cache);
};

function climb(i, n, cache) {
    if (i > n)
        return 0;
    
    if (i === n)
        return 1;
    
    if (cache[i] > 0)
        return cache[i];
    
    cache[i] = climb(i + 1, n, cache) + climb(i + 2, n, cache);
    
   return cache[i];
}