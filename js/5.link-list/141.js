/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    let cursor1 = head
    let cursor2 = head
    while(cursor1 && cursor2.next && cursor2.next.next){
        cursor1 = cursor1.next
        cursor2 = cursor2.next.next
        if(cursor1===cursor2){
            return true
        }
    }
    return false
};