/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Iterative solution - constant space solution O(1)
 * Time complexity: O(H)
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    let node = root;
    while(node !== null) {
        if (val < node.val) {
            if (node.left === null) {
                node.left = new TreeNode(val);
                return root;
            } else {
                node = node.left;
            }
        } else {
            if (node.right === null) {
                node.right = new TreeNode(val);
                return root;
            } else {
                node = node.right;
            }
        }
    }
    
    return new TreeNode(val);
};


/**
 * Recursive solution
 * Time, space complexity: O(H)
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBSTRec = function(root, val) {
    if (root === null) {
        return new TreeNode(val);
    }
    
    if (val > root.val) {
        root.right = insertIntoBST(root.right, val);
    } else {
        root.left = insertIntoBST(root.left, val);
    }
    
    return root;
};