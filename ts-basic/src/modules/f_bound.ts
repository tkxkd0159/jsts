import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";
import { repeat } from "ramda";

interface ICalculable<T, Q> {
    add(value: T): this,
    multiply(value: Q): this
}

interface IvalueProvider<T> {
    value(): T
}

class Calculator implements IvalueProvider<number>, ICalculable<number, number> {
    constructor(private _value: number = 0) {}
    value(): number {
        return this._value
    }
    add(value: number): this {
        this._value += value;
        return this
    }
    multiply(value: number): this {
        this._value *= value;
        return this
    }
}

class StringComposer implements IvalueProvider<string>, ICalculable<string, number> {
    constructor(private _value: string = "") {}
    value(): string {
        return this._value
    }
    add(value: string): this {
        this._value = this._value.concat(value);
        return this
    }
    multiply(repeat: number): this {
        const value = this.value()
        for(let index=0; index < repeat; index++){
            this.add(value)
        }
        return this
    }
}

export { Calculator, StringComposer }