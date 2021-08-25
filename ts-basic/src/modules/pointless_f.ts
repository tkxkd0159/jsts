
const square = (value: number) => value * value
const sum = (result: any, value:any) => result + value

const map = <T>(f: (arg0: T) => T) => (a: T[]) => a.map(f)
const reduce = <T>(f: Function, initValue: any) => (a: any) => a.reduce(f, initValue)

const sumArray = reduce(sum, 0)
const squaredMap = map(square) // == a => map(square)(a)

export {squaredMap, sumArray}