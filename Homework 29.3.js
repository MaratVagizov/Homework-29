let inputNumbers = [15, 8, 10, 3, 7, 1]



function sort(inputNumbers) {
    for (let k = 0; k <= inputNumbers.length; k++) {
        for (let i = 0; i < k; i++) {
            if (inputNumbers[i] > inputNumbers[i+1]) {
                let temporary = inputNumbers[i];
                inputNumbers[i] = inputNumbers[i+1];
                inputNumbers[i+1] = temporary;
            }
        }
    }
    return inputNumbers;
}

sort(inputNumbers)
console.log(sort(inputNumbers));
