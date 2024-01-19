function sumOfDiagonal(matrix) {
    let sum = 0;
    // Check if the matrix is not empty
    if (matrix.length > 0) {
        // Iterate through the rows
        for (let i = 0; i < matrix.length; i++) {          
            console.log(matrix[i].length)
            console.log(matrix[i])
            // Check if the current row has a corresponding element in the diagonal
            if (matrix[i].length > i) {
                console.log(matrix[i][i])
                sum += matrix[i][i];  //sum= sum+ Add the diagonal element to the sum
            }   
        }
    }
    return sum;
}
// Example usage:
const matrix = [[1,5], [3, 4], [5, 6]];
console.log(sumOfDiagonal(matrix)); // Output: 5
