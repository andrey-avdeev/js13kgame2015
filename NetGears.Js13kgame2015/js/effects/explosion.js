function Explosion(params) {
    BaseEffect.call(this, params);
}
Explosion.prototype.update = function () {
    if (this.isRendered) {
        if (this.time >= this.timeMax) {
            this.isRendered = false;
        } else {
            this.time += $.dt;

            this.x += this.vx * $.dt;
            this.y += this.vy * $.dt;
        }
        if (this.x < 0 || this.y < 0 || this.y > $.height) {
            this.isRendered = false;
        }
    }
}
Explosion.prototype.render = function () {
    $.ctxfg.beginPath();
    $.ctxfg.arc(this.x, this.y, Math.round(this.time * 10), 0, 2 * Math.PI, false);
    $.ctxfg.strokeStyle = 'red';
    $.ctxfg.stroke();
}