let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let temp = numbers
            .filter(val => val % 2 != 0)
            .map(val => val * val)
            .reduce((result, val) => result * val, 1)
console.log(temp)