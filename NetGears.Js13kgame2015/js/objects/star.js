function Star(x, y, vx, vy) {
    var _this = this;

    this.position = new Vec2(x, y);
    this.velosity = new Vec2(vx, vy);

    this.width = 2;
    this.height = 2;

    this.isActive = true;
}

Star.prototype.update = function (dt) {
    //TODO
}
Star.prototype.draw = function (ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}