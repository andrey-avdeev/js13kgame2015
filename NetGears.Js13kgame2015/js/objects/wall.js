function Wall(params) {
    BaseObject.call(this, params);
}
Wall.prototype.update = function () {
    this.x += this.vx * $.dt;
    this.y += this.vy * $.dt;
}
Wall.prototype.render = function () {

}