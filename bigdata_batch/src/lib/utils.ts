interface LooseObj {
    [key: string]: any
}

function* range(min: number, max: number, step?: number){
    while (min < max) {
        yield min
        if (step == undefined) {
            min += 1;
        } else {
            min += step;
        }
    }
};

function zip(keys: string[], values: any[]): LooseObj { // Object.keys(obj), Object.values(obj)
    const makeObj = (key: string, value: any) => ({[key]: value})
    const mergeObj = (a: any[]) => a.reduce((sum, val) => ({...sum, ...val}), {})

    let tmp = keys
                .map((key, index) => [key, values[index]])  // [[key1, val1], ... [keyn, valn]]
                .filter(a => a[0] && a[1])
                .map(a => makeObj(a[0], a[1]))

    return mergeObj(tmp)
}



export {LooseObj, range, zip}