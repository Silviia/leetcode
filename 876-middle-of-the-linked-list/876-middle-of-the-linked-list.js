/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let size = 0;
    let node = head;
    
    while (node !== null) {
        size ++;
        node = node.next;
    }
    
    let middle = Math.trunc(size / 2);
    while (middle) {
        head = head.next;
        middle--;
    }
    
    return head;
    
};