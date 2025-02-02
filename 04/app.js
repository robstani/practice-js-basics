function createArray (min, max) {
    const result = [];

    for (let i = 0; i < 20; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        result.push(randomNumber);
    }

    return result;
}

const arr = createArray(1, 100);
console.log(arr);

function getLargest (arr) {
    const numbers = arr.slice();
    numbers.sort(function(a, b) {
        return b - a;
    });
    const newNumbers = numbers.slice(0, 10);
    return newNumbers;
}

const largest = getLargest(arr);
console.log(largest);

function getAvg(arr) {
    let sum = 0;
    let counter = 0;

    arr.forEach(function(element) {
        sum += element;
        counter++;
    });

    
    const avg = counter !== 0 ? sum / counter: 0;
    return avg;
}

const avg = getAvg(largest);
console.log(avg);