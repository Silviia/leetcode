/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * Time complexity: O(N) - we visit each node exactly once
 * Space complexity: O(N)
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const response = [];
    
    if (root === null) {
        return response;
    }
    
    const stack = [];
    
    stack.push(root);
    while(stack.length !== 0 ) {
        let elem = stack.pop();
        response.push(elem.val);
        for(let i = elem.children.length - 1; i >= 0; i--) {
            stack.push(elem.children[i]);
        }
    }
    
    return response;
};