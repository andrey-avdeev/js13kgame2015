function Star(params) {
    BaseEffect.call(this, params);

    this.vx = params.vx;
    this.vy = params.vy;
}
Star.prototype.update = function () {
    this.x += this.vx * $.dt;
    this.y += this.vy * $.dt;
}
Star.prototype.render = function () {

}