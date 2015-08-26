function Physics(d) {
    var _this = this;

    //parameters
    this.gravity = new Vec2(0, 9.8);


    //out of bonds detection
    this.IsCircleOut = function (x1, y1, w1, h1, x2, y2, r2) {
        return x1 + r2 < x2 ||
                x2 + r2 < x1 ||
                y1 + r2 < y2 ||
                y2 + r2 < y1;
    }
    this.IsRectangleOut = function (x1, y1, w1, h1, x2, y2, w2, h2) {
        return false;
    }

    //collision detection
    this.IsCirclesCollides = function (x1, y1, r1, x2, y2, r2) {
        return circle1.position.distance(circle2.position) < r1 + r2;
    }
    this.IsRectangleCircleCollides = function (x1, y1, w1, h1, x2, y2, r2) {
        var distX = Math.abs(x2 - x1 - w1 / 2);
        var distY = Math.abs(y2 - y1 - h1 / 2);

        if (distX > (w1 / 2 + r2)) { return false; }
        if (distY > (h1 / 2 + r2)) { return false; }

        if (distX <= (w1 / 2)) { return true; }
        if (distY <= (h1 / 2)) { return true; }

        var dx = distX - w1 / 2;
        var dy = distY - h1 / 2;
        return (dx * dx + dy * dy <= (r2 * r2));
    }
    this.IsRectanglesCollides = function (x1, y1, w1, h1, x2, y2, w2, h2) {
        return x1 < x2 + w2 &&
                x1 + w1 > x2 &&
                y1 < y2 + h2 &&
                y1 + h1 > y2;
    }

    //event handlers
    //e - event
    this.gravityReverse = function (e) {
        _this.gravity.scale(-1);
    }

    //listeners initialization
    d.addEventListener('gravityReverse', this.gravityReverse);
}