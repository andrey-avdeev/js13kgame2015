function Wall(p, v, m, w, h) {
    var _this = this;

    //parameters
    this.position = p;
    this.velosity = v;
    this.mass = m;

    this.width = w;
    this.height = h;

    this.collisionType = "rectangle";
    this.collisionWidth = w - 1;
    this.collisionHeight = h - 1;

    this.isActive = true;
}

Wall.prototype.update = function (dt, p) {
    //var m = this.mass;
    //var v = this.velocity;
    //var pos = this.position;

    //pos.plus(p.gravityPositionImpact(dt, m, v));
    //v.plus(p.gravityVelocityImpact(dt, m));

    //if (pos.x < 0 || pos.x > canvas.width || pos.y < 0 || pos.y > canvas.height) {
    //    this.isExploded = true;
    //}
}
Wall.prototype.draw = function (ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}