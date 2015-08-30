function Explosion(params) {
    BaseEffect.call(this, params);

    this.isActive = false;
    this.isRendered = false;
}
Explosion.prototype.update = function () {
    if (this.time >= this.timeMax) {
        this.isRendered = false;
    } else {
        this.time += $.dt;
    }
}
Explosion.prototype.render = function () {
    $.ctxfg.beginPath();
    $.ctxfg.arc(this.x, this.y, Math.round(this.time * 10), 0, 2 * Math.PI, false);
    $.ctxfg.strokeStyle = 'blue';
    $.ctxfg.stroke();
}