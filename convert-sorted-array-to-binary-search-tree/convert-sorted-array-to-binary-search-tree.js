/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Time complexity: O(N) since we visit each node once
 * Space complexity: O(logN) - recursion stack requires less space since the tree is height balanced
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return helper(0, nums.length - 1, nums);
};

function helper(left, right, nums) {
    if (left > right) {
        return null;
    }
    
    // Choose middle as the root node
    let pivot = left + Math.floor((right - left) / 2);
    // Preorder traversal -> node -> left -> right
    let root = new TreeNode(nums[pivot]);
    root.left = helper(left, pivot - 1, nums);
    root.right = helper(pivot + 1, right, nums);
    
    return root;
}