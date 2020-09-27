/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
    let cursor = head
    while(cursor && cursor.next){
        if(cursor.val===cursor.next.val){
            cursor.next = cursor.next.next
        }else{
        cursor= cursor.next
        }
    }
    return head
};