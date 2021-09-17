import { opendirSync, readdirSync, rmdirSync, rmSync, mkdirSync} from 'fs';
import * as fss from 'fs/promises';

async function mkdirRecur(path: string, async_: boolean = true) {
    if (!async_){
        mkdirSync(path, {recursive: true})
    } else {
        await fss.mkdir(path, {recursive: true})
    }
    console.log(`Generate ${path} if it doesn't exist\n`)
}

async function rmRecur(path: string, async_: boolean = true) {
    try {
        if (!async_) {
            rmSync(path, {recursive: true, force: true})
            } else {
                await fss.rm(path, {recursive: true, force: true})
            }
    } catch(e) {
        if (e instanceof Error) {
            console.log(e.message)
        }
    }

}

const targetExist = async(fpath: string): Promise<boolean> => {
    try {
        console.log('Checking if there is a target exists...')
        const result = await fss.access(fpath)
        console.log('This file(or directory) exists')
        return true
    } catch(e) {
        if (e instanceof Error) {
            console.log(e.message)
            return false
        } else {
            return false
        }
    } finally {
        console.log("Finish checking\n")
    }
};


export {fss,
        mkdirRecur, rmRecur, targetExist,
        }