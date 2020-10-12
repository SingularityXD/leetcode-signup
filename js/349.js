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

    const intersection = function(nums1, nums2) {
        const map = new Map()
        nums1.forEach(item=>{
            map.set(item,true)
        })
        const ret = []
        nums2.forEach(item=>{
            if(map.get(item)){
                ret.push(item)
                map.delete(item)
            }
        })
        return ret
    };