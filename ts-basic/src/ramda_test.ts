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


const exp = (N: number) => (x: number): number => x ** N;
const square = exp(2);
type NumToNum = (arg: number) => number;
const f = (a: number, b: number, c: number): NumToNum => (x: number): number => R.add(a * square(x) + b * x, c); // ax^2 + bx + c
let input: number[] = R.range(1, 11);
const res = R.pipe(
    R.map(f(1, 2, 1)),
    R.tap(a => console.log(a))
)(input)

// @ts-ignore
R.pipe(R.filter(R.lte(3)), R.filter(R.gt(7)), R.tap(n=> console.log(n)))(R.range(1, 11));

type NumToBool = (arg: number) => boolean;
const selRange = (min: number, max: number): NumToBool => R.allPass([R.lte(min), R.gt(max)]);
const notRange = (min: number, max: number) => R.pipe(selRange(min, max), R.not)
// @ts-ignore
R.pipe(R.filter(notRange(3, 7)), R.tap(n => console.log(n)))(R.range(1, 11));

const subOrAdd = R.pipe(R.map(R.ifElse(R.lte(6), R.inc, R.dec)), R.tap(a => console.log(a)))
subOrAdd(R.range(1, 11))

// String
import Chance from 'chance'
var c = new Chance();
console.log(c.coin())
console.log(c.coin())
console.log(c.coin())
console.log(c.coin())
console.log(c.coin())
console.log(c.coin())