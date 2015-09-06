function Explosion(params) {
    BaseEffect.call(this, params);

    this.radius = this.time;

    this.isActive = false;
    this.isRendered = false;
}
Explosion.prototype.update = function () {
    if (this.time >= this.timeMax) {
        this.isActive = false;
        this.isRendered = false;
    } else {
        this.time += $.dt;

        this.x += this.vx * $.dt;
        this.y += this.vy * $.dt;

        this.radius = this.time * 8;
    }
    if (this.x + this.radius < 0 || this.y + this.radius < 0 || this.y - this.radius > $.height) {
        this.isActive = false;
        this.isRendered = false;
    }
}
Explosion.prototype.render = function () {
    $.ctxfg.beginPath();
    $.ctxfg.arc(this.x, this.y, Math.round(this.radius), 0, 2 * Math.PI, false);
    $.ctxfg.strokeStyle = 'red';
    $.ctxfg.stroke();
}

Explosion.prototype.refresh = function (x,y,vx) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.time = 0;
    this.isActive = true;
    this.isRendered = true;
}