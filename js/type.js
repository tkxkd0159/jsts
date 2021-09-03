function type() {
  console.log(2 > 1);
  console.log(3 >= 2);
  console.log(3 == "3");
  console.log(3 === "3");
  console.log(3 !== "3");
  console.log(!(7 != "7") && 7 == "7");
  console.log(7 != "7" || 7 == "7");
  console.log(typeof (2 > 1));
  console.log(typeof 2);
  console.log(typeof "string");
  console.log("Function type :", typeof function () {});
  console.log("Convert Number to String :", String(10));
  console.log("Convert String to Number :", Number("2"));
  console.log(
    "Convert 0, NaN, '', null, undefined to boolean :",
    Boolean(0),
    Boolean(NaN),
    Boolean(''),
    Boolean(null),
    Boolean(undefined)
  );
  console.log(`null is undefined : ${null == undefined}`);
  console.log("Array type :", typeof arrayExample);
  console.log("class type :", typeof MyClass);
  console.log(objectTest.first.fifth[0].target);

}

class MyClass {}
let arrayExample = ["First", true, 1];
let objectTest = {
  first: {
    second: ["John", "Jack", "PSJ"],
    third: { fourth: ["final", "layer"] },
    fifth: [
      { target: "first element", valid: true },
      { target: "first element", valid: false },
    ],
  },
};

type();
