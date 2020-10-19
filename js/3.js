/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
    let l = 0
    let res = 0
    const cache = new Map()
    for (let r = 0; r < s.length; r++) {
        const rightChar = s[r]
        if (cache.has(rightChar) && cache.get(rightChar) >= l) {
            l = cache.get(rightChar) + 1
        }
        res = Math.max(res, r - l + 1)
        cache.set(rightChar, r)
    }
    return res
};