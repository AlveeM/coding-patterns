const find_subsets = nums => {
    nums.sort();
    const subsets = [];
    subsets.push([]);
    let startIdx = 0;
    let endIdx = 0;

    for (let i = 0; i < nums.length; i++) {
        startIdx = 0;
        if (i > 0 && nums[i] === nums[i - 1]) {
            startIdx = endIdx + 1;
        }
        endIdx = subsets.length - 1;
        for (j = startIdx; j < endIdx + 1; j++) {
            const set = subsets[j].slice(0);
            set.push(nums[i]);
            subsets.push(set);
        }
    }
    return subsets;
}

// TC: O(2^n)
// SC: O(2^n)

console.log('Here is the list of subsets: ');
let result = find_subsets([1, 3, 3]);
result.forEach((subset) => {
  console.log(subset);
});

console.log('Here is the list of subsets: ');
result = find_subsets([1, 5, 3, 3]);
result.forEach((subset) => {
  console.log(subset);
});