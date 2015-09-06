function Star(params) {
    BaseEffect.call(this, params);
}
Star.prototype.update = function () {
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
    } else {
        this.time = 0;
        this.x = $.width + $.utils.Random(0, 100);
        this.y = $.height / 2 + $.utils.Random(-50, 50);
        this.isRendered = true;
    }
}
Star.prototype.render = function () {
    $.ctxfg.drawImage($.cPreStar, Math.round(this.x), Math.round(this.y))
}