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


export {LooseObj, range}