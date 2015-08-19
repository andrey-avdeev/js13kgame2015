function LaserBeam(x, y, vx, vy, m) {
    var _this = this;

    //parameters
    this.position = new Vec2(x, y);
    this.velosity = new Vec2(vx, vy);
    this.mass = m;

    this.width = 10;
    this.height = 1;

    this.collisionType = "rectangle";
    this.collisionWidth = 10;
    this.collisionHeight = 1;

    this.isActive = true;

    //listeners initialization
    d.addEventListener('laserbeamExplode', this.explode);
}

LaserBeam.prototype.update = function (dt) {
    //var m = this.mass;
    //var v = this.velocity;
    //var pos = this.position;

    //pos.plus(p.gravityPositionImpact(dt, m, v));
    //v.plus(p.gravityVelocityImpact(dt, m));

    //if (pos.x < 0 || pos.x > canvas.width || pos.y < 0 || pos.y > canvas.height) {
    //    this.isExploded = true;
    //}
}
LaserBeam.prototype.draw = function (ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}

LaserBeam.prototype.explode = function (e) {
    this.isActive = false;
}