const make_squares = arr => {
    let n = arr.length
    let squares = Array(n).fill(0);
    let highestSquareIdx = n - 1;
    let left = 0;
    let right = n - 1;

    while (left <= right) {
        leftSquare = arr[left] * arr[left];
        rightSquare = arr[right] * arr[right];
        if (leftSquare > rightSquare) {
            squares[highestSquareIdx] = leftSquare;
            left += 1;
        } else {
            squares[highestSquareIdx] = rightSquare;
            right -= 1;
        }
        highestSquareIdx -= 1;
    }

    return squares;
}

// TC: O(n)
// SC: O(n)

console.log(`Squares: ${make_squares([-2, -1, 0, 2, 1])}`);
console.log(`Squares: ${make_squares([-3, -2, 0, 5, 2])}`);