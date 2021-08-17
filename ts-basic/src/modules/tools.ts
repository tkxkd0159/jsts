export default {
    range: function range(from: number, to: number): number[] {
        return from < to ? [from, ...range(from+1, to)] : []
    },
    fold: function<T>(arr: T[], callback: (res: T, val: T) => T, initVal: T): T {
        let res: T = initVal
        for (let i = 0; i < arr.length; ++i) {
            const val = arr[i]
            res = callback(res, val)
        }
        return res
    },
    filter: function<T>(arr: T[], callback: (value: T, index?: number) => boolean): T[] {
        let res: T[] = []
        for (let i = 0; i < arr.length; ++i) {
            let val = arr[i]

            if (callback(val, i)) {
                res = [...res, val]
            }
        }
        return res
    },
    isOdd: function(n: number): boolean {
        return n % 2 !== 0
    },
    map: function<T, Q>(arr: T[], callback: (value: T, index?: number) => Q): Q[] {
        let res: Q[] = []
        for (let i = 0; i < arr.length; ++i) {
            res.push(callback(arr[i], i))
        }
        return res
    },
    test: (): void => {}
}