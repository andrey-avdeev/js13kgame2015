function Star(params) {
    BaseEffect.call(this, params);

    this.vx = params.vx;
    this.vy = params.vy;

    this.width = params.width;
    this.height = params.height;
    this.arrayIndex = params.arrayIndex;
}
Star.prototype.update = function () {
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
    if (!this.isRendered) {
        this.time = 0;
        this.x = $.width + $.utils.Random(0, 100);
        this.y = $.height / 2 + $.utils.Random(-50, 50);
        this.isRendered = true;
    }
}
Star.prototype.render = function () {
    //$.ctxfg.beginPath();
    //$.ctxfg.fillStyle = 'red';
    //$.ctxfg.fillRect(this.x, this.y, 1, 1);
    $.ctxbg.drawImage($.cPreStars[this.arrayIndex], Math.round(this.x), Math.round(this.y))
}