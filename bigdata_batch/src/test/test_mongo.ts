import {client, ObjectId, mgConnectToC, readDocuFromC, insertDocuFromC, delDocuFromC} from '../lib/mongo';



async function main() {
    let collection = await mgConnectToC();
    await collection.createIndex({name: 1, age: -1}); // name을 오름차순 정렬한 상태에서 age 내림차순 정렬로 인덱싱 -> 후에 sort나 데이터 찾을 때 빠름
    await delDocuFromC({});
    await insertDocuFromC([{name: 'BBB', age: 3}, {name: 'BBB', age: 229}, {name: 'AAA', age: 10}]);

    const cursor = collection.find({}).sort({name: 1, age: -1})
    const cursor2 = collection.find({age: { $gt: 100}})
    console.log(await cursor.toArray())
    console.log(await cursor2.toArray())

    let last_test = readDocuFromC({_id: new ObjectId("614dd1ea081d47080aff1cd9")});

    console.log(" * Main done")
    console.log(await last_test)
}

main()
.catch(console.error)
.finally(() => client.close())


// main()
//     .then((c) => {
//         return new Promise((resolve, reject) => {
//             resolve(c.insertOne({ prmise: "is", nice: "!!" }))
//         })
//     })
//     .catch(console.error)
//     .finally(() => client.close());

// readDocuFromC({_id: new ObjectId("614dba04d9fcaabca509f503")}).then(console.log).finally(() => client.close())