import {zip} from '../lib/utils'
import {readFileGenerator} from '../lib/cfs'

let header = [];
let line_num = 1;
for (let line of readFileGenerator('./data/fake-50000.csv')) {
    if (!header.length) {
        header = line.split(',');
    } else {
        console.log(`<<<<<<<<<<<< ${line_num++} >>>>>>>>>>>`)
        console.log(zip(header, line.split(',')))

    }
}