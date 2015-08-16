
//d - document
function Asteroid(d) {
    //private variable
    var _this = this;

    //flag for removing dead object
    this.isBlown = false;

    //canvas asteroid position
    this.position = new Vec2(0, 0);

    //canvas asteroid velocity
    this.velocity = new Vec2(0, 0);

    //asteroid mass
    this.mass = 3;

    //event handlers

    //listeners initialization
    d.addEventListener('asteroidBlow', _this.blow);
}

Asteroid.prototype.blow = function (e) {
    this.isBlown = true;
}