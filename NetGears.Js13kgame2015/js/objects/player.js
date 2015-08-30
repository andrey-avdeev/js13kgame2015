function Player(params) {
    BaseObject.call(this, params);

    this.m = params.m;
}
Player.prototype.update = function () {
    this.x += this.vx * $.dt;
    this.y += ($.g * $.dt * $.dt / 2) + this.vy * $.dt;

    this.vy += $.dt * $.g * this.m;
}
Player.prototype.render = function () {
    $.ctxfg.beginPath();
    $.ctxfg.fillStyle = 'black';
    $.ctxfg.fillRect(this.x, this.y, 10, 10);
}