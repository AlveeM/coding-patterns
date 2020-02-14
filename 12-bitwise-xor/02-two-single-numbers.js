const find_single_numbers = nums => {
    let n1xn2 = 0;
    nums.forEach(num => {
        n1xn2 ^= num;
    });

    let rightmostSetBit = 1;
    while ((rightmostSetBit & n1xn2) === 0) {
        rightmostSetBit = rightmostSetBit << 1;
    }
    let num1 = 0;
    let num2 = 0;
    nums.forEach(num => {
        if ((num & rightmostSetBit) !== 0) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    });
    return [num1, num2];
}

console.log(`Single numbers are: ${find_single_numbers([1, 4, 2, 1, 3, 5, 6, 2, 3, 5])}`);
console.log(`Single numbers are: ${find_single_numbers([2, 1, 3, 2])}`);