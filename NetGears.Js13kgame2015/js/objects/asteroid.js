function Asteroid(params) {
    BaseObject.call(this, params);

    this.m = params.m;
}
Asteroid.prototype.update = function () {
    this.x += this.vx * $.dt;
    this.y += ($.g * $.dt * $.dt / 2) + this.vy * $.dt;

    this.vy += $.dt * $.g * this.m;
}
Asteroid.prototype.render = function () {

}