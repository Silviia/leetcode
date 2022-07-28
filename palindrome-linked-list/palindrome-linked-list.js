/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Solve using the two pointers aproach - slow and fast pointer; 
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null) {
        return true;
    }
    
    // Find the middle of the list
    let firstHalfEnd = findMiddle(head);
    
    // Reverse second half of the list
    let secondHalfStart = reverseList(firstHalfEnd.next);
    
    // Check the first half of the list with the reversed second half
    let p1 = head, p2 = secondHalfStart;
    let isPalindrome = true;
    while(isPalindrome && p2 !== null) {
        if (p1.val !== p2.val) {
            isPalindrome = false;
        }
        p1 = p1.next;
        p2 = p2.next;
    }
    
    // Restore the list
    firstHalfEnd.next = reverseList(secondHalfStart);
    
    return isPalindrome;
    
};

function findMiddle(head) {
    let slow = head, fast = head;
    while(fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
    return slow;
}

/**
 * Reberse linked list 
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    let curr = head, prev = null, next = null;
    
    while(curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    
    head = prev;
    
    return head;
}