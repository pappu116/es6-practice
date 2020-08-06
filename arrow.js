// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt= function(num){
//     return num *2 ;
// }

const doubleIt= num => num *2; // es6 ar arrow function this line
const add = (x, y) => x + y;
const give5= ()=>5;

const doMath= (x, y) => {
const sum= x + y;
const diff = x - y;
const result = sum * diff;
return result;
}
const result2= add(50, 70)
const result3=give5();
const result4 = doMath(7, 5)
const result= doubleIt(50);
console.log(result4)