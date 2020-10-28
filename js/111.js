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
 * @return {number}
 */
const minDepth = function(root) {
    if(!root) return 0
    const queue = [[root,1]]
    while (queue.length){
        const [h,l] = queue.shift()
        const nl = l+1
        if(!h.left&&!h.right){
            return l
        }
        if(h.left) queue.push([h.left,nl])
        if(h.right) queue.push([h.right,nl])
    }
};