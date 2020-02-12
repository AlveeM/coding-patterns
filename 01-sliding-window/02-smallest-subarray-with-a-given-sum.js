const smallest_subarray_with_given_sum = function(s, arr) {
    let minLength = Infinity;
    let windowSum = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        while (windowSum >= s) {
            minLength = Math.min(minLength,(windowEnd - windowStart + 1));
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }

    if (minLength === Infinity) {
        return 0;
    }
    return minLength;
};

// TC: O(n)
// SC: O(1)

console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2])}`); // 2
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8])}`); // 1
console.log(`Smallest subarray length: ${smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6])}`); // 3