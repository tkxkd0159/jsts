let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let temp = numbers
            .filter(val => val % 2 != 0)
            .map(val => val * val)
            .reduce((result, val) => result * val, 1)
console.log(temp)

import { Calculator, StringComposer } from "./modules/f_bound"

const val1 = (new Calculator(1))
                .add(2)
                .multiply(4)
                .value()
const val2 = (new StringComposer('Hello'))
                .add(' ')
                .add('world_')
                .multiply(3)
                .value()

console.log(val1)
console.log(val2)

import _ from 'lodash';
let orig_obj: any = {"a":{"b":4}};
let clone_obj = {...orig_obj};
let deepclone_obj = _.cloneDeep(orig_obj);

clone_obj.a.b = 10
deepclone_obj.a.b = 100
console.log(orig_obj, clone_obj, deepclone_obj);

clone_obj.a = "changed"
console.log(orig_obj, clone_obj, deepclone_obj);
deepclone_obj.a = "changed 2"
console.log(orig_obj, clone_obj, deepclone_obj);
