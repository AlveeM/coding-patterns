const non_repeat_substring = str => {
    let windowStart = 0;
    let maxLength = 0;
    let charIdxMap = {};

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++){
        const rightChar = str[windowEnd];
        if (rightChar in charIdxMap) {
            windowStart = Math.max(windowStart, charIdxMap[rightChar] + 1);
        }
        charIdxMap[str[windowEnd]] = windowEnd;
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
}

// TC: O(n)
// SC: O(k) or O(1) since the expected input is a fixed set of characters (alphabets)

console.log(`Length of the longest substring: ${non_repeat_substring('aabccbb')}`);
console.log(`Length of the longest substring: ${non_repeat_substring('defhddee')}`);