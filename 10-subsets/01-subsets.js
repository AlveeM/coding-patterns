const find_subsets = nums => {
    const subsets = [];
    subsets.push([]);
    for (let i = 0; i < nums.length; i++) {
        currentNum = nums[i];
        const n = subsets.length;
        for (let j = 0; j < n; j++) {
            const set = subsets[j].slice(0);
            set.push(currentNum);
            subsets.push(set);
        }
    }
    return subsets;
}

// TC: O(2^n);
// SC: O(2^n);

console.log('List of subsets: ');
let result = find_subsets([1, 3]);
result.forEach((subset) => {
  console.log(subset);
});

console.log('List of subsets: ');
result = find_subsets([1, 5, 3]);
result.forEach((subset) => {
  console.log(subset);
});