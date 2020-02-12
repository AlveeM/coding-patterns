const longest_substring_with_k_distinct = function(str, k) {
    let windowStart = 0;
    let maxLength = 0;
    let charFrequency = {};

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (!(rightChar in charFrequency)) {
            charFrequency[rightChar] = 0
        }
        charFrequency[rightChar]++;

        while (Object.keys(charFrequency).length > k) {
            const leftChar = str[windowStart];
            charFrequency[leftChar] -= 1;
            if (charFrequency[leftChar] === 0) {
                delete charFrequency[leftChar];
            }
            windowStart++;
        }

        maxLength = Math.max(maxLength, (windowEnd - windowStart + 1));
    }

    return maxLength;
};

// TC: O(n)
// SC: O(k)

console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 2)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('araaci', 1)}`);
console.log(`Length of the longest substring: ${longest_substring_with_k_distinct('cbbebi', 3)}`);