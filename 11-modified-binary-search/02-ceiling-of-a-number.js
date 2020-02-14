const search_ceiling_of_a_number = (arr, key) => {
    const length = arr.length;
    if (key > arr[length -1]) {
        return -1;
    }

    let start = 0;
    let end = length - 1;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (key < arr[mid]) {
            end = mid - 1;
        } else if (key > arr[mid]) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    return start;
}

// TC: O(log n)
// SC: O(1)

console.log(search_ceiling_of_a_number([4, 6, 10], 6));
console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12));
console.log(search_ceiling_of_a_number([4, 6, 10], 17));
console.log(search_ceiling_of_a_number([4, 6, 10], -1));