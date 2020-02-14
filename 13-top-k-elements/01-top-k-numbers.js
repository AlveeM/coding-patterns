const Heap = require('collections/heap');

const find_k_largest_numbers = (nums, k) => {
    const minHeap = new Heap([], null, ((a, b) => b - a));
    for (let i = 0; i < k; i++) {
        minHeap.push(nums[i]);
    }

    for (i = k; i < nums.length; i++) {
        if (nums[i] > minHeap.peek()) {
            minHeap.pop();
            minHeap.push(nums[i]);
        }
    }

    return minHeap.toArray();
}

console.log(`Top K numbers: ${find_k_largest_numbers([3, 1, 5, 12, 2, 11], 3)}`);
console.log(`Top K numbers: ${find_k_largest_numbers([5, 12, 11, -1, 12], 3)}`);