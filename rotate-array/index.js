var rotate = function(nums, k) {
    if (nums.length > k) {
        const popped = []
        for (let i = 0; i < k; i++) {        
            popped.push(nums.pop())
        }
        nums.unshift(...popped.reverse())
    } else {
        for (let i = 0; i < k; i++) {        
            nums.unshift(nums.pop())
        }
    }
    
};
