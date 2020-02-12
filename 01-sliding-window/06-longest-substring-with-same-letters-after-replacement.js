const length_of_longest_substring = (str, k) => {
    let windowStart = 0;
    let maxLength = 0;
    let maxRepeatLetterCount = 0;
    let freqMap = {};

    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if (!(rightChar in freqMap)) {
            freqMap[rightChar] = 0;
        }
        freqMap[rightChar] += 1;
        maxRepeatLetterCount = Math.max(maxRepeatLetterCount, freqMap[rightChar]);

        if ((windowEnd - windowStart + 1 - maxRepeatLetterCount) > k) {
            leftChar = str[windowStart];
            freqMap[leftChar] -= 1;
            windowStart += 1;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}

// TC: O(n)
// SC: O(1)

console.log(length_of_longest_substring('aabccbb', 2));
console.log(length_of_longest_substring('abbcb', 1));
console.log(length_of_longest_substring('abccde', 1));