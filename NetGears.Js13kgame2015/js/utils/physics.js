function Physics(d) {
    var _this = this;

    //parameters
    this.gravity = new Vec2(0, 9.8);

    //gravity impact on position and velocity
    //v - velocity of object, m - mass of object
    //this.positionImpact = function (dt, m, velocity) {
    //    var g = _this.gravity;
    //    var v = velocity;

    //    return new Vec2(((g.x * dt * dt) / (2 * m)) + v.x * dt, ((g.y * dt * dt) / (2 * m)) + v.y * dt);
    //}
    //this.velocityImpact = function (dt, m) {
    //    var g = _this.gravity;

    //    return new Vec2(g.x * dt / m, g.y * dt / m);
    //}

    //collision checking
    this.CircleCircleColliding = function (circle1, circle2) {
        if (circle1.position.distance(circle2.position) < circle1.radius + circle2.radius) {
            return true;
        } else {
            return false;
        }
    }
    this.RectangleCircleColliding = function (rectangle, circle) {
        var distX = Math.abs(circle.position.x - rectangle.position.x - rectangle.width / 2);
        var distY = Math.abs(circle.position.y - rectangle.position.y - rectangle.height / 2);

        if (distX > (rectangle.width / 2 + circle.radius)) { return false; }
        if (distY > (rectangle.height / 2 + circle.radius)) { return false; }

        if (distX <= (rectangle.width / 2)) { return true; }
        if (distY <= (rectangle.height / 2)) { return true; }

        var dx = distX - rectangle.width / 2;
        var dy = distY - rectangle.height / 2;
        return (dx * dx + dy * dy <= (circle.radius * circle.radius));
    }
    this.RectangleRectangleColliding = function (rectangle1, rectangle2) {
        if (rectangle1.position.x < rectangle2.position.x + rectangle2.width &&
            rectangle1.position.x + rectangle1.width > rectangle2.position.x &&
            rectangle1.position.y < rectangle2.position.y + rectangle2.height &&
            rectangle1.position.y + rectangle1.height > rectangle2.position.y) {
            return true;
        } else {
            return false;
        }
    }

    //event handlers
    //e - event
    this.gravityReverse = function (e) {
        _this.gravity.scale(-1);
    }

    //listeners initialization
    d.addEventListener('gravityReverse', this.gravityReverse);
}