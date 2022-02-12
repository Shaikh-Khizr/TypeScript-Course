// readonly vs static property

class Fruit {
    readonly price: number;
    protected static count: number = 0;

    constructor(price: number) {
        this.price = price
        Fruit.count++
    }

    // set MyPrice () {
    //     this.price = 44
    // }

    static getCount() {
        return Fruit.count
    }
}

const mango = new Fruit(20)
// console.log(mango.price);
// console.log(Fruit.count);
console.log(Fruit.getCount());

const apple = new Fruit(23)
// console.log(Fruit.count);
console.log(Fruit.getCount());
