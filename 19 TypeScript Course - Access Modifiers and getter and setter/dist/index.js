"use strict";
// CLASS with TypeScript
class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // public getX() {
    //     return this.x
    // }
    abcd() { }
}
class MyCoordinate extends Coordinate {
    // public getX() {
    get anything() {
        return this.x;
    }
    // public setX(value: number) {
    set anything(value) {
        this.x = value;
    }
}
// const point = new Coordinate(44, 5)
const point = new MyCoordinate(44, 5);
// point.setX(55)
// point.X = 55
// console.log(point.X);
point.anything = 55;
console.log(point.anything);
