
const square = (value: number) => value * value
const sum = (result: any, value:any) => result + value

const map = <T>(f: (arg0: T) => T) => (a: T[]): T[] => a.map(f)
const reduce = <T>(f: (sum: T, value: T) => T, initValue: T) => (a: T[]): T => a.reduce(f, initValue)

const sumArray = reduce(sum, 0)
const squaredMap = map(square) // == a => map(square)(a)

export {squaredMap, sumArray}