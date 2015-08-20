function Explosion(p, w, h) {
    var _this = this;

    //parameters
    this.position = p;

    this.width = w;
    this.height = h;

    this.isActive = true;
}

Explosion.prototype.update = function (dt, p) {
    //TODO
}
Explosion.prototype.draw = function (ctx) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}