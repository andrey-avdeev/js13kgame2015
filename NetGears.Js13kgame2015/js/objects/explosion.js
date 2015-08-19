function Explosion(x, y) {
    var _this = this;

    //parameters
    this.position = new Vec2(x, y);

    this.width = 5;
    this.height = 5;

    this.isActive = true;
}

Explosion.prototype.update = function (dt) {
    //TODO
}
Explosion.prototype.draw = function (ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}