/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
    return [...new Set(nums1)].filter(item=>nums2.includes(item))
};

const intersection = (num1, num2) => {
    const cache = {}
      return num1.filter(key => {
          if (num2.includes(key) && !cache[key]) {
            cache[key] = true;
            return num2.includes(key);
          }
        }
      )
    }