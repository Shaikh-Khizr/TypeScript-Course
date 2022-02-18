"use strict";
// Generics Constraints
const details = { lastName: 'Shaikh', firstName: 'Khizr' };
function getElement(obj, key) {
    return obj[key];
}
console.log(getElement(details, 'firstName'));
// function getPerson<T extends Person>(data: T) {
//     return data
// }
// console.log(getPerson(details));
