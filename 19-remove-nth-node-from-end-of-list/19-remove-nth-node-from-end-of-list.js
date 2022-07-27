/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * The algorithm makes two traversals of the list, first to calculate the list length L and second to find the (L-n)nth node.
 * There are 2L - n operations and time complexity is O(L).
 * Space complexity: O(1)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let size = 0;
    let curr = head;
    while(curr !== null) {
        size += 1;
        curr = curr.next;        
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    curr = dummy;
    size = size - n;
    while(size > 0) {
        size -= 1;
        curr = curr.next;
    }
    curr.next = curr.next.next;
    
    return dummy.next;
};