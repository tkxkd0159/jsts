import { closeSync, fstatSync, openSync, readSync, rmSync, mkdirSync} from 'fs';
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

function readLine(fd: any, buffer: Buffer, buffer_size: number, position: number): [string, number] {
    let line = "";
    const cr_size = '\n'.length;

    while (true) {
        let read_size = readSync(fd, buffer, 0, buffer_size, position)
        if (read_size > 0) {
            let tmp = buffer.toString('utf8', 0, read_size);
            let idx = tmp.indexOf('\n');
            if (idx > -1) {
                line += tmp.substr(0, idx)
                position += idx + cr_size
                break
            } else { // 해당 buffer에 \n 존재하지 않을 때, \n 나올 때까지 while 반복
                line += tmp;
                position += tmp.length;
            }
        }
        else {
            position = -1 // end of file
            break
        }
    }
    return [line.trim(), position]
}

// 거대한 데이터를 한번에 읽으면 메모리가 많이 필요하므로  Buffer 객체를 활용해 1024 bytes 씩 읽으면서 \n를 기준으로 읽음
function* readFileGenerator(filename: string): any {
    let fd: any;
    try {
        fd = openSync(filename, 'rs');
        let stats = fstatSync(fd);
        let buf_size = Math.min(stats.size, 1024);
        let buf = Buffer.alloc(buf_size);
        let file_pos = 0;
        let line_content: any;

        while(file_pos > - 1) {
            [line_content, file_pos] = readLine(fd, buf, buf_size, file_pos)
            if (file_pos > -1) {
                yield line_content
            }
        }
        yield buf.toString()

    } catch(e: any) {
        console.error('readLine : ', e.message)
    } finally {
        fd && closeSync(fd);
    }
}



export {fss,
        mkdirRecur, rmRecur, targetExist, readFileGenerator
        }