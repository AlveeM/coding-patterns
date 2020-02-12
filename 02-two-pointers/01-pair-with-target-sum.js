const pair_with_target_sum = (arr, targetSum) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const currentSum = arr[left] + arr[right];
        if (currentSum === targetSum) {
            return [left, right];
        }

        if (targetSum > currentSum) {
            left += 1;
        } else {
            right -= 1;
        }
    }

    return [-1, -1];
}

// TC: O(n)
// SC: O(1)

console.log(pair_with_target_sum([1, 3, 5, 7, 11], 2));
console.log(pair_with_target_sum([2, 6, 7, 14, 16, 19], 21));

// Using hash table
const pair_with_target_sum_hash = (arr, targetSum) => {
    const nums = {};
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (targetSum - num in nums) {
            return [nums[targetSum - num], i];
        }
        nums[arr[i]] = i;
    }
    return [-1, -1];
}

// TC: O(n)
// SC: O(n)

console.log(pair_with_target_sum_hash([1, 3, 5, 7, 11], 2));
console.log(pair_with_target_sum_hash([2, 6, 7, 14, 16, 19], 21));