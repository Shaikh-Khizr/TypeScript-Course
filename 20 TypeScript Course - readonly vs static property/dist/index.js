"use strict";
// readonly vs static property
class Fruit {
    constructor(price) {
        this.price = price;
        Fruit.count++;
    }
    // set MyPrice () {
    //     this.price = 44
    // }
    static getCount() {
        return Fruit.count;
    }
}
Fruit.count = 0;
const mango = new Fruit(20);
// console.log(mango.price);
// console.log(Fruit.count);
console.log(Fruit.getCount());
const apple = new Fruit(23);
// console.log(Fruit.count);
console.log(Fruit.getCount());
