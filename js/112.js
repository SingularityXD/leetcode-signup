/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function(root, sum) {
    if(!root) return false
    let res = false
    const dfs = (n,count)=>{
        if(!n.left&&!n.right&&count === sum){
            res = true
        }
        if(n.left)dfs(n.left,count + n.left.val)
        if(n.right) dfs(n.right,count +n.right.val)
    }
    dfs(root,root.val)
    return res
};