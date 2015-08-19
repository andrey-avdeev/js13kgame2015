function Asteroid(x, y, vx, vy, m) {
    var _this = this;

    //parameters
    this.position = new Vec2(x, y);
    this.velosity = new Vec2(vx, vy);
    this.mass = m;

    this.radius = 10;

    this.collisionType = "circle";
    this.collisionRadius = 10;

    this.isActive = true;

    //listeners initialization
    //canvas.addEventListener('asteroidExplode', this.explode);
}

Asteroid.prototype.update = function (dt) {
    //TODO
}
Asteroid.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
}

Asteroid.prototype.explode = function (e) {
    this.isActive = false;
}