function PowerUp(params) {
    BaseObject.call(this, params);

}
PowerUp.prototype.update = function () {
    this.x += this.vx * $.dt;
    this.y += this.vy * $.dt;
}
PowerUp.prototype.render = function () {

}