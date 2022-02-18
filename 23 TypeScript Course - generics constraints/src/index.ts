// Generics Constraints

type Person = {
    firstName: string
}
const details = { lastName: 'Shaikh', firstName: 'Khizr' }

function getElement<O extends object, K extends keyof O>(obj: O, key: K) {
    return obj[key]
}
console.log(getElement(details, 'firstName'));


// function getPerson<T extends Person>(data: T) {
//     return data
// }

// console.log(getPerson(details));
