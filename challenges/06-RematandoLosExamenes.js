export default function sumPairs(numbers, result) {
    let values = null
    numbers.forEach((num, i) => {
        numbers.forEach((num2, j) => {
            if(i !== j && ((num + num2) === result) && !values) values = [num, num2]
        });
    });

    return values
}

console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6))