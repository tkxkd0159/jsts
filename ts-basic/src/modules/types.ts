
const studentNumber: number = 201902000
let myName: string = "LJS"

interface NamedParam {
    x: number
    y: number
}

/**
* Return Cubic value.
* @param {number} x - Target number
* @return {number, number} The cubic value of target number, target nubmer
*/
function cubic1(x: number): [number, number] { return [x * x * x, x] }
function product({x, y}: NamedParam): number { return x * y }
function printTest(): void {console.log("I am printTest()")}

function isEmpty<T>(array: T[]): boolean {
    return array.length == 0
}

interface ICompany {
    name: string
    field: string
    wage: number
}
 interface IPerson {
    name: string
    age?: number
}
interface IKorean extends IPerson{
    area: string
    country: string
}

abstract class Korean implements IKorean {
    abstract name: string
    abstract age?: number
    abstract area: string
    abstract country: string

    abstract savedVal(): string
    testPrint() {
        console.log("Test Inheritance")
    }
}

class Student  extends Korean {
    name: string
    country: string
    age?: number
    area: string
    static initVal = 1
    constructor(name: string, country: string, area: string, age?: number) {
        super()
        this.name = name;
        this.age = age;
        this.country = country
        this.area = area
    }

    savedVal(): string {
        return `${this.name} ${this.country} ${this.area}`
    }
}

class Calculator {
    value: number

    constructor(value: number = 0) {
        this.value = value
    }
    add(value: number){
        this.value += value
        return this
    }
    multiply(value: number){
        this.value *= value
        return this
    }
}

export default cubic1
export {
        studentNumber, myName,
        Student, Calculator,
        ICompany, IPerson,
        printTest, product, isEmpty
}