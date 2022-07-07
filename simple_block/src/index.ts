import {createHash} from "crypto";
import ev from "./env.config";

import {init, init2} from './mypkg'

console.log(init({url: "sample", debug: true}))
console.log(init2({url: "sample", debug: true}))


class Block {
    protected hash: string;
    constructor(
        protected prevHash: string,
        protected height: number,
        protected data: string,
    ){
        this.hash = Block.calculateHash(prevHash, height, data)
    }

    static calculateHash(prevHash: string, height: number, data: string): string {
        const source = `${prevHash}${height}${data}`
        return createHash("sha256").update(source).digest("hex")
    }

    getPrevHash(): string {
        return this.prevHash
    }
    getHash(): string {
        return this.hash
    }
    getHeight(): number {
        return this.height
    }
    getData(): string {
        return this.data
    }
}

class Blockchain {
    private blocks: Block[]
    constructor(
        private genesisSource: string,
        private genesisData: string
    ) {
        this.blocks = [];

        const genesisHash = createHash("sha256").update(genesisSource).digest("hex");
        const genesisBlock = new Block(genesisHash, 0, genesisData)
        this.blocks.push(genesisBlock)

    }

    addBlock(blk: Block) {
        this.blocks.push(blk)
    }

    getBlocks(): Block[] {
        return [...this.blocks] // do not allow to modify 'blocks' property
    }
}

const myChain = new Blockchain("genesis", "This is first block")
console.log(myChain)

const blks = myChain.getBlocks()
