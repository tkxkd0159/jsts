let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let temp = numbers
            .filter(val => val % 2 != 0)
            .map(val => val * val)
            .reduce((result, val) => result * val, 1)
console.log(temp)

import { Calculator, StringComposer } from "./modules/f_bound"

const val1 = (new Calculator(1))
                .add(2)
                .multiply(4)
                .value()
const val2 = (new StringComposer('Hello'))
                .add(' ')
                .add('world_')
                .multiply(3)
                .value()

console.log(val1)
console.log(val2)

import * as R from 'ramda'
import { squaredMap, sumArray,  } from "./modules/pointless_f"
const fourSquare = R.pipe(squaredMap, squaredMap)
console.log(fourSquare([3, 4]))

let hypotenuse = R.pipe(squaredMap, sumArray, Math.sqrt)
console.log(hypotenuse([3, 4]))