const find_missing_number = nums => {
    let i = 0;
    const n = nums.length;
    while (i < n) {
        numIdx = nums[i];
        if (nums[i] < n && nums[i] !== nums[numIdx]) {
            [nums[i], nums[numIdx]] = [nums[numIdx], nums[i]];
        } else {
            i += 1;
        }
    }

    for (i = 0; i < n; i++){
        if (nums[i] !== i) {
            return i;
        }
    }

    return n;
}

// TC: O(n)
// SC: O(1)

console.log(find_missing_number([0, 4, 3, 1]));
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]));