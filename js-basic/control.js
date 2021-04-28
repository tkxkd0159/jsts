let ifVar = 15;

if (ifVar >= 0 && ifVar < 10){
    console.log("it's bigger than 0")
}
else if (ifVar >=10 && ifVar <=20){
    console.log("else if test")
}
else {
    console.log("Default")
}

let caseVar = true;

switch (caseVar) {
    case "1":
        console.log("String case")
        break;
    case 2:
        console.log("Number case")
        break;
    case true:
        console.log("Boolean case")  // break 안쓰면 그 case부터 그 아래 default 까지 전부 실행됨.
    default:
        console.log("Default case")
}

for (let localForVar = 0; localForVar < 3; localForVar++){
    console.log(`localForVar : ${localForVar}`)
}
let globalForVar = 0;
for (; globalForVar < 4; globalForVar++){
    console.log(`globalForVar : ${globalForVar}`);
}

let whileVar = 0;
while(1){
    if(whileVar % 2 === 0){
        whileVar++
        continue;
    }
    console.log(whileVar);
    whileVar++
    if(whileVar === 10){
        break;
    }
}