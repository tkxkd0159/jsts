import { IndexSpecification } from "mongodb";

import { readFileGenerator } from "./lib/cfs";
import { client, mgConnectToC } from "./lib/mongo";
import { zip } from "./lib/utils"

async function insertCsvToMongo(csv_file: string, collection_name: string, db_name: string, index: IndexSpecification) {
    try {
        const c = await mgConnectToC(collection_name, db_name)
        await c.deleteMany({})
        await c.createIndex(index)

        let line_num = 1
        let header = []
        for (let line of readFileGenerator(csv_file)) {

            if (!header.length) {
                header = line.split(',')
            } else {
                await c.insertOne(zip(header, line.split(',')))
                console.log(`${line_num++} inserted`)
            }

        }

        console.log(' * Insertion complete')
    } catch(e: any) {
        console.log(e.message)
    } finally {
        client.close();
    }
}

// npm run save "./data/fake-50000.csv" "myDocu" "nodejsTest" "{\"birthday\":-1, \"name\":1}"
let [, , csv_name, c_name, db_name, c_index] = process.argv

c_index = JSON.parse(c_index)

insertCsvToMongo(csv_name, c_name, db_name, c_index)
.catch(console.error)
.finally(() => {client.close()})