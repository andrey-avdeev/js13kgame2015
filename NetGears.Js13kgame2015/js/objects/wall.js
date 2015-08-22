function Wall(x, y, vx, vy) {
    var _this = this;

    //parameters
    this.position = new Vec2(x, y);
    this.velosity = new Vec2(vx, vy);

    this.width = 10;
    this.height = 5;

    this.collisionType = "rectangle";
    this.collisionWidth = 10;
    this.collisionHeight = 5;

    this.isActive = true;
}

Wall.prototype.update = function (dt) {
    //TODO
}
Wall.prototype.draw = function (ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}