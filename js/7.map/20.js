// https://leetcode-cn.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false
    }
    const stack = []
    const map = {
        '{': '}',
        '[': ']',
        '(': ')'
    };
    const lefts = Object.keys(map)
    for (let char of s) {
        if (lefts.includes(char)) {
            stack.push(char)
        } else if (stack.length === 0) {
            return false
        } else {
            const top = stack[stack.length - 1]
            if (map[top] === char) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
};

const isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false
    }
    const stack = []
    const map = new Map()
    map.set('{','}')
    map.set( '[',']')
    map.set( '(',')')
    const lefts = Array.from(map.keys())
    for (let char of s) {
        if (lefts.includes(char)) {
            stack.push(char)
        } else if (stack.length === 0) {
            return false
        } else {
            const top = stack[stack.length - 1]
            if (map.get(top) === char) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
};