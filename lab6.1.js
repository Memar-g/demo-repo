function sumOrTriple(a, b) {
    let sum = a + b;
    return (a === b) ? sum * 3 : sum;
}

// Example usage
console.log(sumOrTriple(3, 3)); // Output: 18
console.log(sumOrTriple(4, 5)); // Output: 9
