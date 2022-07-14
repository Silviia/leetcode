/**
 * Floyd's Cycle aproach - time limit exceeded;
 * Time complexity: O(logN)
 * Space complexity: O(1)
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let slow = n, fast = getNext(n);
    
    while (slow !== fast && fast !== 1) {
        slow = getNext(slow);
        fast = getNext(getNext(fast));
    }
    
    return fast === 1;
};

function getNext(n) {
    let sum = 0;
    
    while (n > 0) {
        let d = n % 10;
        sum += d*d;
        n = Math.floor(n/10);
    }
    
    return sum;
}

/**
 * Keep an additional set to check for cycles.
 * Time complexity: O(logN)
 * Space complexity: O(N)
 * @param {number} n
 * @return {boolean}
 */
var isHappySet = function(n) {
    const visited = new Set();
    
    while (n != 1 && !visited.has(n)) {
        visited.add(n);
        n = getNext(n);
    }
    
    return n === 1;
};
