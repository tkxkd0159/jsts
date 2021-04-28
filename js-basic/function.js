function optionalParameter(name, nationality = "korea") {
  console.log(`My name is ${name}, ${nationality}`);
}
function blockStatement() {
  let localVar = 10;
  console.log(localVar);
  console.log(globalVar);
}
function fibo(n){
    if(n === 1) return 1;
    if(n === 2) return 1;
    if(n < 1) return NaN;

    return fibo(n-2) + fibo(n-1);
};

let globalVar = 5;
const PI = 3.14; // can't reassign later

function sqrt(x) {
  return x ** 2;
}
let x = 30;
console.log(`x : ${x}, x^2 : ${sqrt(x)}`);

optionalParameter("ljs");
optionalParameter("psj", "US");
blockStatement();
console.log(fibo(3));