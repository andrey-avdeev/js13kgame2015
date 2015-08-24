function Player(params) {
    BaseObject.call(this, params);

    this.m = params.m;
}
Player.prototype.update = function () {
    this.x += this.vx * $.dt;
    this.y += $.g * this.vy * $.dt / this.m;

    this.vy += $.g * $.dt / this.m;
}
Player.prototype.render = function () {

}