var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.dist = function () {
        return Math.sqrt(this.x * this.x + this.y + this.y);
    };
    Point.prototype.setAsZero = function () {
        this.x = 0;
        this.y = 0;
    };
    return Point;
})();
