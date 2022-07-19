/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let sum = 0;
    const stack = [];
    
    stack.push(root);
    while(stack.length !== 0) {
        let node = stack.pop();

        // Check if the left node is a leaf node
        if (isLeaf(node.left)) {
            sum += node.left.val;
        }
        // If the right node exists, put it on the stack
        if (node.right !== null) {
            stack.push(node.right);
        }
        // If the left node exists, put it on the stack
        if (node.left !== null) {
            stack.push(node.left);
        }
    }
    
    return sum;
};

function isLeaf(node) {
    return node !== null && node.left === null && node.right === null;
}