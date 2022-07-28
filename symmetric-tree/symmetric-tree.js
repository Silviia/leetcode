/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/************* Iterative Solution *************/
/**
 * The right and left children of the nodes are inserted in the queue in opposite order.
 * The algorithm is done when queue is empty or we detect that the tree is not symmetric.
 * Time complexity: O(N) - we traverse the entire tree once
 * Space complexity: O(N) - there is additional space required for the search queue. In the worst case we need to insert O(N) nodes into the queue
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const queue = [];
    queue.push(root);
    queue.push(root);
    
    while (queue.length !== 0) {
        let t1 = queue.pop();
        let t2 = queue.pop();
        if (t1 === null && t2 === null) {
            continue;
        }
        if (t1 === null || t2 === null) {
            return false;
        }
        if (t1.val !== t2.val) {
            return false;
        }
        queue.push(t1.left);
        queue.push(t2.right);
        queue.push(t1.right);
        queue.push(t2.left);
    }
    
    return true;
};

/************* Recursive Solution *************/
/**
 * Time complexity: O(N) - we traverse the entire tree once
 * Space complexity: O(N) - the number of recursive calls is bound to the height of the tree. In the worse case, the tree is linear and the height is in O(N)
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetricRecursive = function(root) {
    return isMirror(root, root);
};

function isMirror(t1, t2) {
    if (t1 === null && t2 === null) {
        return true;
    }
    if (t1 === null || t2 === null) {
        return false;
    }
    return (t1.val === t2.val) && isMirror(t1.right, t2.left) && isMirror(t1.left, t2.right);
}