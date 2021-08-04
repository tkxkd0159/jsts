
const studentNumber: number = 201902000
let myName: string = "LJS"

/**
 * Return Cubic value.
 * @param {number} x - Target number
 * @return {number} The cubic value of target number
 */
 function myDfunc(x: number): number { return x * x * x }

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

    savedVal() {
        return `${this.name} ${this.country} ${this.area}`
    }
}

export default myDfunc
export { studentNumber, myName, Student, ICompany, IPerson }