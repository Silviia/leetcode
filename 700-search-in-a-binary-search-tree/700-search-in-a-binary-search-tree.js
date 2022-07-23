/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Better space solution than the recursive method since is a constant space solution. O(1)
 * Time complexity: O(H), where H is the height of the tree
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    while(root !== null && root.val !== val) {
        root = val < root.val ? root.left : root.right;
    }
    
    return root;
};


var searchBSTRecursive = function(root, val) {
    if (root === null || root.val === val) {
        return root;
    }
    
    return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
};