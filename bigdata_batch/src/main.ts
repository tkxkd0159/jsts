import {join} from 'path';


import {
        fss,
        mkdirRecur, rmRecur, targetExist
} from "./lib/cfs";
import {LooseObj} from './lib/utils';
import {makeFakeData} from './lib/fake'
// Relative path start at the root of project
// cwd : __dirname

targetExist('./data')
.then((b) => {if(!b) {mkdirRecur(join(__dirname, '..', '/data'), true)}})
.then(() => {
    fss.writeFile('./data/test.json', JSON.stringify({name: 'Jack', age: 32}, null, 2))
})
.then(()=>{targetExist('./data/test.json')})
.then(() => {return fss.readFile('./data/test.json', {encoding: 'utf8'})})
.then(data => {
    let parsed_data: LooseObj = JSON.parse(data);
    parsed_data['location'] = "Seoul";
    fss.writeFile('./data/test.json', JSON.stringify(parsed_data, null , 2))
})
.catch((e: Error) => console.log(e.message));

