/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function(root) {
    let ret = 0
    const dfs = (root,l=1)=>{
        if(!root) return
        if(!root.left && !root.right){
            ret = Math.max(ret,l)
        }
        dfs(root.left,l+1)
        dfs(root.right,l+1)
    }
    dfs(root)
    return ret
};