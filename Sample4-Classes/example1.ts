/* 
    SAMPLE 4 - Classes
    ------------------

- uses function closures
- Ecmascript 6 target

- 'properties'
- 'methods'
- constructor
- static
- public/private

- c'tor declarations:
    constructor(public x: number =0, public y: number = 0) {

- "the wrong this" --- that=this

*/

class Point {
    x: number;
    y: number;

    constructor (x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    dist() { return Math.sqrt(this.x * this.x + this.y + this.y); }

    private setAsZero() {
        this.x = 0;
        this.y = 0;
    }

}

/*

class Point3D extends Point {
    constructor (
        public x: number = 0,
        public y: number = 0,
        public z: number = 0) {
        super(x, y);
    }

}
*/
