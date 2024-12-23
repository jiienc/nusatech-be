function sortEvenOddNumbers(numbers) {
    // Splitting
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    const oddNumbers = numbers.filter(num => num % 2 !== 0);
    
    // Sorting
    evenNumbers.sort((a, b) => a - b);
    oddNumbers.sort((a, b) => a - b);
    
    // Merging
    return [...evenNumbers, ...oddNumbers];
}

const input = [5, 3, 8, 6, 1, 9, 2];
const result = sortEvenOddNumbers(input);
console.log(result);
