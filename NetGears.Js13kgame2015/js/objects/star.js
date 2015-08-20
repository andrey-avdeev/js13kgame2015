function Star(p, v, w, h) {
    var _this = this;

    //parameters
    this.position = p;
    this.velosity = v;

    this.width = w;
    this.height = h;

    this.isActive = true;
}

Star.prototype.update = function (dt,p) {
    //TODO
}
Star.prototype.draw = function (ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}