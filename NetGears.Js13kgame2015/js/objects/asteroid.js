
//d - document
function Asteroid(d) {
    //private variable
    var _this = this;

    //flag for removing dead object
    this.isExploded = false;

    //canvas asteroid position
    this.position = new Vec2(0, 0);

    //canvas asteroid velocity
    this.velocity = new Vec2(0, 0);

    //asteroid mass
    this.mass = 3;

    //event handlers

    //listeners initialization
    d.addEventListener('asteroidExplode', _this.explode);
}

Asteroid.prototype.explode = function (e) {
    this.isExploded = true;
}

Asteroid.prototype.update = function (dt) {
    //this.position=(p.gravity.scale(dt*dt/2))
}

Asteroid.prototype.draw = function (canvas, ctx) {

}