function Asteroid(p, v, m, r) {
    var _this = this;

    //parameters
    this.position = p;
    this.velosity = v;
    this.mass = m;

    this.radius = r;

    this.collisionType = "circle";
    this.collisionRadius = r - 1;

    this.isActive = true;
}

Asteroid.prototype.update = function (dt,p) {
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