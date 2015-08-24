function LaserBeam(params) {
    BaseObject.call(this, params);
}
LaserBeam.prototype.update = function () {
    this.x += this.vx * $.dt;
    this.y += this.vy * $.dt;
}
LaserBeam.prototype.render = function () {

}