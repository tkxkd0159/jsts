# Setting
```bash
npm i -g typescript
npm i -g ts-node
npm install -D tslib @types/node

npm run build    # build
npm run start    # build and run
ts-node -r dotenv/config index.ts # Direct execution

npm run es6            # Execute js file as es6
```

# Debug
## Local test
엔트리 파일에서: 
```
ctrl+p
debug Launch program with <item>
```
기본 설정 디버깅할거면 그냥 엔트리 파일에서 F5