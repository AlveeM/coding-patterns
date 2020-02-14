const find_single_number = arr => {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num ^= arr[i];
    }
    return num;
}

// TC: O(n)
// SC: O(1)

console.log(find_single_number([4, 2, 1, 3, 1, 2, 3]));