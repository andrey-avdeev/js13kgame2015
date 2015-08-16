
//d - document
function LaserBeam(d) {
    //private variable
    var _this = this;

    //flag for removing dead object
    this.isBlown = false;

    //canvas asteroid position
    this.position = new Vec2(0, 0);

    //canvas asteroid velocity
    this.velocity = new Vec2(40, 0);

    //asteroid mass
    this.mass = 0.0;

    //beam length in pixels
    this.length = 10;

    //event handlers

    //listeners initialization
    d.addEventListener('laserbeamBlow', _this.blow);
}

LaserBeam.prototype.blow = function (e) {
    this.isBlown = true;
}