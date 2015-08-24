function Star(params) {
    BaseEffect.call(this, params);

    this.vx = params.vx;
    this.vy = params.vy;
}
Star.prototype.update = function () {
    if (this.isRendered && this.time >= this.timeMax) {
        this.isRendered = false;
    } else {
        this.time += $.dt;

        this.x += this.vx * $.dt;
        this.y += this.vy * $.dt;
    }
}
Star.prototype.render = function () {

}