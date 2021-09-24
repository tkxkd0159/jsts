# Stack
## 1. Express
```
npm i express cors
npm i -D @types/cors
```

### 1-1) body parser
```ts
app.use(express.urlencoded({ extended: true })); // extended 옵션 쓰면 객체 안에 객체도 파싱 가능
app.use(express.json());
```
### 1-2) CORS
```ts
const app = express();
app.use(cors())
```
## MongoDB
Datebase -> Collection -> Document로 이루어짐  
Document는 일반적으로 json 형태로 각각 고유한 object ID를 가진다  

deafult port : 27017  
```bash
net start mongodb # as sudo(or administrator)
mongosh "mongodb://localhost:27017" # mongosh is MongoDB Shell
```

### Mongosh
```bash
help
db # display the db I am using (current db)
db.dropDatabase()

show profile
show dbs
show users
show roles

use <database> # create or switch to target db, 1개 이상 collection이 있어야 생성 확정
show collections
db.createCollection(<name>)
db.createView(<name>, <source>)          # act as read-only collections, and are computed on demand during read operations. 
db.<fromColl>.renameCollection(<toColl>) # change collection's name
db.<collection>.findOne([query])
db.<collection>.find([query])            # query 안쓰면 collection 안 데이터 전체 검색
db.<colelction>.insertOne(<obj>)
db.<colelction>.insertMany([obj1, obj2, ...])
db.<colelction>.updateOne(query, update, options)  # db.collections.updateOne({_id: ObjectId("614da583cc5b3a6a3fe26d43")}, {$set: {"b": 77}}), 
                                                   # {$unset: {"new b": 77}}, {$rename: {"b": "new b"}}
db.<colelction>.deleteOne(query)                   # db.collections.deleteOne({"_id": ObjectId("614daa3dcc5b3a6a3fe26d45")})
db.<colelction>.deleteMany(query)                  # 해당 쿼리에 걸리는 document 모두 삭제
db.<collection>.drop()      # 해당 collection 삭제
```
## React
```bash
# At root
npx create-react-app <react_project_name> --template typescript
```

# Scenario
1. Generate a huge amount of fake data -> column : (`name`, `email`, `job`, `birthday`, `description`)
2. Save those data as `csv` file
3. Make `readFileGenerator` to save memory and store them in MongoDB
4. Make REST API server through Express
5. Make frontend web with React and Bootstrap

```bash
npm run gen_bigdata  # Make a lot of fake data for testing
npm run test ./src/test/test_readcsv.ts # test
```