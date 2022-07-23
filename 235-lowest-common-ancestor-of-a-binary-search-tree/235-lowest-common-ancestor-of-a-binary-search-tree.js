/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let parentVal = root.val;  // Value of current or parent node
    let pVal = p.val; 
    let qVal = q.val;
    
    if (pVal > parentVal && qVal > parentVal) {
        // If both values are greater than the parent, search to the right
        return lowestCommonAncestor(root.right, p, q);
    } else if (pVal < parentVal && qVal < parentVal) {
        // If both values are smaller than the parent, search to the left
        return lowestCommonAncestor(root.left, p, q);
    } else {
        // We have found the split point
        return root;
    }
};