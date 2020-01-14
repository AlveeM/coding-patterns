const max_sub_array_of_size_k = function(k, arr) {
    let result = 0;
    let windowSum = 0;
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];
        if (windowEnd >= k - 1) {
            result = Math.max(result, windowSum);
            windowSum -= arr[windowStart];
            windowStart += 1;
        }
    }
    return result;
  };

console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]));