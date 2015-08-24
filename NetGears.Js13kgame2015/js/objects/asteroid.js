function Asteroid(params) {
    BaseObject.call(this, params);

    this.m = params.m;
}
Asteroid.prototype.update = function () {
    this.x += this.vx * $.dt;
    this.y += $.g * this.vy * $.dt / this.m;

    this.vy += $.g * $.dt / this.m;
}
Asteroid.prototype.render = function () {

}