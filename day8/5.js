//type script 
//int.i=100;

//var is old type of doing and it create 2 diff objects
//variable declaration
var j = 100;
var j = 101;
j = j + 1;
console.log("The value of J is",j);


//error - Let does not allow multiple declaration
let i = 100;
//let i = 101;
i = i + 1;
console.log("The value of I is",i);


//using const we can declare a variable..but below method is wrong way
//we cannot re-assign to constant variable
const id = 100;
id = id + 1;   //is this opearation allowed ?? NO