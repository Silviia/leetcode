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
 * @return {boolean}
 */
var isValidBST = function(root) {
    return validate(root, null, null);
};

function validate(root, low, high) {
    // Empty trees are valis BSTs
    if (root === null) {
        return true;
    }
    
    // Current node value must be between low and high
    if ((low !== null && root.val <= low) || (high != null && root.val >= high)) {
        return false;
    }
    
    // The left and right subtrees also must be validated
    return validate(root.right, root.val, high) && validate(root.left, low, root.val);
}