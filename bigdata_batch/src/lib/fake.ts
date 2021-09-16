import Chance from 'chance';
import { write } from 'fs';
import {dirname} from 'path';

import {mkdirRecur, fss} from './cfs';
import {range} from './utils';

const c = new Chance();

interface IFake {
    name: string
    email: string
    job: string
    birthday: Date
    sentence: string
}

function makeFakeData(): IFake {
    return {
        name: c.name(),
        email: c.email(),
        job: c.profession(),
        birthday: c.birthday(),
        sentence: c.sentence({words: 8})
    }
}


async function writeCsvFakeData(filename_with_parent: string, n_items: number, is_append: boolean): Promise<string> {
    let filename = `${filename_with_parent}-${n_items}.csv`
    const dname = dirname(filename)
    await mkdirRecur(dname)
    for (let n of range(0, n_items)) {
        let fdata: IFake = makeFakeData();
        if (n == 0 && !is_append) {
            let keys = Object.keys(fdata).join(',');
            await fss.writeFile(filename, keys)
        }
        const values = Object.values(fdata).join(',')
        await fss.appendFile(filename, '\n' + values)
    }
    return `Write ${n_items} items to ${filename}`
};


if (require.main === module) { // npm run gen_bigdata "./data/fake" 50000
    (async function(){
        const filename = process.argv[2];
        const n_items = parseInt(process.argv[3]);
        writeCsvFakeData(filename, n_items, false)
    })();
}

export {makeFakeData, writeCsvFakeData}