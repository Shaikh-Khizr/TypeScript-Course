"use strict";
// interface in TypeScript
function getFruit(fruit) {
    return `${fruit.name} is having price of $${fruit.price}`;
}
let mango = { name: 'Mango', price: 20 };
// mango.price = 9
console.log(getFruit(mango));
class MyFruit {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
