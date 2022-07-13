/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = Array.from(s); // String type is immutable in javascript so we can create a char array
    let i = 0;
    
    for (j = 0; j < s.length; j ++) {
        if (s[j] === ' ') {
            reverse(arr, i, j - 1);
            i = j + 1;
        }
    }
    
    reverse(arr, i, j - 1);
    
    return arr.join("");
};

function reverse(arr, i, j) {
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i ++;
        j --;
    }
}