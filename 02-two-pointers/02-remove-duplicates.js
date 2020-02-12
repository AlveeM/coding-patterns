const remove_duplicates = arr => {
    let nextNonDup = 1;

    let i = 1;
    while (i < arr.length) {
        if (arr[nextNonDup - 1] !== arr[i]) {
            arr[nextNonDup] = arr[i];
            nextNonDup += 1;
        }
        i += 1;
    }

    return nextNonDup;
}

// TC: O(n)
// SC: O(1)

console.log(remove_duplicates([0, 1, 1, 2, 2, 3, 4, 4]));
console.log(remove_duplicates([2, 2, 2, 11]));