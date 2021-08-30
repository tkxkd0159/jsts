// ramda

import * as R from 'ramda'
import { squaredMap, sumArray,  } from "./modules/pointless_f"
const fourSquare = R.pipe(squaredMap, squaredMap)
console.log(fourSquare([3, 4]))

let hypotenuse = R.pipe(squaredMap, sumArray, Math.sqrt)
console.log(hypotenuse([3, 4]))

const sumArgs = (...args:number[]) => R.sum(args);

console.log("Sum int : ", sumArgs(1, 2, 3))

const mapIndexed = R.addIndex(R.map);
const test_res = R.pipe(
    mapIndexed((val, idx) => idx + '-' + val),
    R.tap(a => console.log("Add index : ", a))
)


// @ts-ignore
test_res(['f', 'o', 'o', 'b', 'a', 'r'])


const addIndex2 = R.pipe(
    R.addIndex(R.map)((value: any, index: any) => R.add(value)(index)),
    R.tap(a => console.log("Add index to number: ", a)))
// @ts-ignore
addIndex2(R.range(1, 10))


const newArr = R.pipe(
    R.map(R.flip(R.subtract)(10)),
    R.tap(a => console.log(a))
)
newArr(R.range(1, 10))