const cyclic_sort = nums => {
    let i = 0;
    while (i < nums.length) {
        const correctIdx = nums[i] - 1;
        if (nums[i] !== nums[correctIdx]) {
            [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
        } else {
            i += 1;
        }
    }
    return nums;
}

// TC: O(n) + O(n - 1) -> O(n)
// SC: O(1)

console.log(cyclic_sort([4, 2, 5, 3, 1]));
console.log(cyclic_sort([7, 3, 6, 4, 2, 1, 5]));