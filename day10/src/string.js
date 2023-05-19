//   JSON STRING TO OBJECT LITERALS
// const jsonString = '{"name": "Goku", "age": 30, "city": "Japan"}';
// const jsonObject = JSON.parse(jsonString);

// console.log(jsonObject);
// console.log(typeof jsonObject);


//   OBJECT LITERAL TO JSON STRING
const jsonObject = { name: "Vegeta", age: 30, city: "Japan" };
const jsonString = JSON.stringify(jsonObject);

console.log(jsonString);
console.log(typeof jsonString);