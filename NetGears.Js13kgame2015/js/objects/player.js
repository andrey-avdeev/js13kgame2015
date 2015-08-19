function Player(x, y, vx, vy, m) {
    var _this = this;

    //parameters
    this.position = new Vec2(x, y);
    this.velosity = new Vec2(vx, vy);
    this.mass = m;

    this.width = 10;
    this.height = 5;

    this.collisionType = "rectangle";
    this.collisionWidth = 10;
    this.collisionHeight = 5;

    this.isActive = true;

    //listeners initialization
    d.addEventListener('playerShoot', this.shoot);
    d.addEventListener('playerExplode', this.explode);
}

Player.prototype.update = function (dt) {
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
Player.prototype.explode = function (e) {
    this.isActive = false;
}