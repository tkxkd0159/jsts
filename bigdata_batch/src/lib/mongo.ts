import {MongoClient, ObjectId, Document} from 'mongodb'

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function mgConnectToC(collection_name: string = 'myDocu', db_name: string = 'nodejsTest') {
    await client.connect();
    const db = client.db(db_name);
    const c = db.collection(collection_name);
    return c
}

async function readDocuFromC(query: Object, db_name: string = 'nodejsTest', collection_name: string = 'myDocu') {
    const c = await mgConnectToC(db_name, collection_name);
    let cursor = c.find(query)
    return cursor.toArray()
}

async function insertDocuFromC(query: Document[], multi: boolean = true, db_name: string = 'nodejsTest', collection_name: string = 'myDocu') {
    const c = await mgConnectToC(db_name, collection_name);

    if (multi) {
        await c.insertMany(query)
    } else {
        await c.insertOne(query)
    }
}

async function delDocuFromC(query: Object, multi: boolean = true, db_name: string = 'nodejsTest', collection_name: string = 'myDocu') {
    const c = await mgConnectToC(db_name, collection_name);

    if (multi) {
        await c.deleteMany(query)
    } else {
        await c.deleteOne(query)
    }
}



export {client, ObjectId,
    mgConnectToC, readDocuFromC, insertDocuFromC, delDocuFromC
}