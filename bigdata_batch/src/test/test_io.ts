import {join} from 'path';

import { LooseObj } from '../lib/utils';
import {fss, mkdirRecur, rmRecur, targetExist} from "../lib/cfs";

const target_path = join(__dirname, '..', '..', '/test/')
const file_name = 'test.json'
const full_path = target_path + file_name;
targetExist(target_path)
.then((b) => {if(!b) {mkdirRecur(target_path, true)}})
.then(() => {
    fss.writeFile(full_path, JSON.stringify({name: 'Jack', age: 32}, null, 2))
})
.then(()=>{targetExist(full_path)})
.then(() => {return fss.readFile(full_path, {encoding: 'utf8'})})
.then(data => {
    let parsed_data: LooseObj = JSON.parse(data);
    parsed_data['location'] = "Seoul";
    fss.writeFile(full_path, JSON.stringify(parsed_data, null , 2))
})
.then(() => {
    console.log(" * Waiting for removing directory")
    setTimeout(() => {
        rmRecur(target_path)
    }, 3000);
})
.catch((e: Error) => console.log(e.message));