/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const diffs= new Map()
    const len = nums.length
    for(let i = 0;i<len;i++){
        const cache = diffs.get(target-nums[i])
        if(cache!==undefined) {
            return [cache, i]
        }
        diffs.set(nums[i],i)
    }
};

const twoSum = function(nums, target) {
    const map = new Map()
    for(let i = 0;i<nums.length;i++){
        const item = nums[i]
        const diff = target - item
        if(map.has(diff)){
          return [map.get(diff),i]
        }else{
         map.set(item,i) 
        }
    }
  };