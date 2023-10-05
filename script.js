function convertToRoman(num) {
    const obj = {
        0: ['M', 1000],
        1: ['D', 500],
        2: ['C', 100],
        3: ['L', 50],
        4: ['X', 10],
        5: ['V', 5],
        6: ['I', 1]
    };

    let romanNumeral = '';

    for (let i = 0; i < 7; i++) {
        const symbol = obj[i][0];
        const value = obj[i][1];

        // Calculate the number of times the current symbol should appear
        const count = Math.floor(num / value);

        // Append the symbol to the result
        romanNumeral += symbol.repeat(count);

        // Update the remaining number
        num %= value;
    }

    return romanNumeral;
}

// Example usage:
console.log(convertToRoman(36)); // Output: "XXXVI"
