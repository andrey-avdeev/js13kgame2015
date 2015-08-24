function Explosion(params) {
    BaseEffect.call(this, params);
}
Explosion.prototype.update = function () {
    if (this.isRendered && this.time >= this.timeMax) {
        this.isRendered = false;
    } else {
        this.time += $.dt;
    }
}
Explosion.prototype.render = function () {

}