let hellAry = [3, [1, 4,[3, [6, 2], 5], 1, 3], 4, [8, 1, [2, 1, 9], 5], 5, 9];

function recursiveDeep(acc, ary) {
    if (ary.length === 0) {
        return acc;
    } else {
        if (typeof ary[0] === 'number') {
            console.log(`${acc}, [${ary}]`)
        }
        return recursiveDeep(acc + (typeof ary[0] === 'number' ? ary[0] : recursiveDeep(0, ary[0])), ary.slice(1));
    }
}

console.log(typeof hellAry)
console.log(`${hellAry}`)
console.log(`${recursiveDeep(0, hellAry)}`)