function Player(p, v, m, w, h) {
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

    //listeners initialization
    //d.addEventListener('playerShoot', this.shoot);
}

Player.prototype.update = function (dt, p) {
    //_this.position.plus(p.gravityPositionImpact(dt, _this.mass, _this.velosity));
    //_this.velosity.plus(p.gravityVelocityImpact(dt, _this.mass));

    //if (_this.position.x < 0 || _this.position.x > canvas.width || _this.position.y < 0 || _this.position.y > canvas.height) {
    //    _this.isExploded = true;
    //}
}
Player.prototype.draw = function (ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}

Player.prototype.shoot = function (e) {
    //d.dispatchEvent(ev.laserbeamCreate(this.position.x + this.width, this.position.y + this.height / 2));
}