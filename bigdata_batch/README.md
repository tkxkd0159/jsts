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
deafult port : 27017  
```bash
net start mongodb # as sudo(or administrator)
mongosh "mongodb://localhost:27017" # mongosh is MongoDB Shell
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
