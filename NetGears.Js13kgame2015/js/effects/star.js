﻿function Star(params) {
    BaseEffect.call(this, params);
}
Star.prototype.update = function () {
    if (!this.isRendered && this.x < $.width) {
        this.isRendered = true;
    }
    if (this.time >= this.timeMax) {
        this.isActive = false;
        this.isRendered = false;
    } else {
        this.time += $.dt;

        this.x += this.vx * $.dt;
        this.y += this.vy * $.dt;
    }
    if (this.x < 0 || this.y < 0 || this.y > $.height) {
        this.isActive = false;
        this.isRendered = false;
    }
}
Star.prototype.render = function () {
    $.ctxfg.drawImage($.cPreStar, Math.round(this.x), Math.round(this.y))
}

Star.prototype.refresh = function () {
    this.time = 0;
    this.x = $.width + $.utils.Random(0, $.width / 4);
    this.y = $.utils.Random($.height / 8, $.height * 7 / 8);

    this.isActive = true;
}