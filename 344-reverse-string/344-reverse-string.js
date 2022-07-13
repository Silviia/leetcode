/**
 * Use two pointer aproach to swap N/2 elements.
 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0, right = s.length - 1;
    
    while (left < right) {  
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left ++;
        right --;
    }
};