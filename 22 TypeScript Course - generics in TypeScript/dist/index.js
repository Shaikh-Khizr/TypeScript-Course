"use strict";
// Generics in TypeScript
let arrNum = [23, 45, 643, 345, 123456];
// function getRandomElementInt(arr:number[]) {
//     const index = Math.floor(Math.random() * arr.length)
//     return arr[index]
// }
// console.log(getRandomElementInt(arrNum));
let arrString = ['a', 'b', 'c', 'd', 'e'];
// function getRandomElementString(arr:string[]) {
//     const index = Math.floor(Math.random() * arr.length)
//     return arr[index]
// }
// console.log(getRandomElementString(arrString));
// function getRandomElement(arr:any[]) : any {
function getRandomElement(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}
// console.log(getRandomElement(arrNum));
// console.log(getRandomElement(arrString));
let result;
// result = getRandomElement(arrString)
// result = getRandomElement(arrString)
// console.log(typeof result);
getRandomElement(arrNum);
getRandomElement(arrNum);
