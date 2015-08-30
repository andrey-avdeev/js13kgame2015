function LaserBeam(params) {
    BaseObject.call(this, params);
}
LaserBeam.prototype.update = function () {
    this.x += this.vx * $.dt;
}
LaserBeam.prototype.render = function () {
}