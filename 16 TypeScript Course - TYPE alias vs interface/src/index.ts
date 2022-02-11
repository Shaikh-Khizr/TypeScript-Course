// TYPE ALIAS & INTERFACE

interface Fruit {
// type Fruit = {
    name: string,
    taste: string,
    color: string,
    allSeason: boolean
}

// type Mango = Fruit & {
//     price: number
// }

// interface Mango extends Fruit {
//     price: number
// }

interface Fruit {
    price: number
}

// let fruit1: Mango = {
let fruit1: Fruit = {
    name: 'Mango',
    taste: 'Sweet',
    color: 'Yellow',
    allSeason: false,
    price: 123
}

let fruit2: Fruit = {
    name: 'Orange',
    taste: 'Sweet-tart',
    color: 'Orange',
    allSeason: false,
    price: 255
}

console.log(typeof fruit1.name);
