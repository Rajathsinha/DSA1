function excelColumnToNumber(columnName) {
    let result = 0;

    for (let i = 0; i < columnName.length; i++) {
        const charValue = columnName.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
        result = result * 26 + charValue;
    }

    return result;
}

// Example usage:
console.log(excelColumnToNumber('A'));    // Output: 1
console.log(excelColumnToNumber('B'));    // Output: 2
console.log(excelColumnToNumber('Z'));    // Output: 26
console.log(excelColumnToNumber('AA'));   // Output: 27
console.log(excelColumnToNumber('AB'));   // Output: 28
console.log(excelColumnToNumber('ABC'));  // Output: 731
console.log(excelColumnToNumber('ABA'));  // Output: 729
