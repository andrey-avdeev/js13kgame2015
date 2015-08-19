
//d - document, pos - initial position
function LaserBeam(d, pos) {
    //private variable
    var _this = this;

    //flag for removing dead object
    this.isExploded = false;

    //canvas laserbeam position
    this.position = new Vec2(pos.x, pos.y);

    //canvas laserbeam velocity
    this.velocity = new Vec2(200, 0);

    //laserbeam mass
    this.mass = 100;

    //beam length in pixels
    this.length = 10;

    this.type = "rectangle";
    this.width = this.length;
    this.height = 1;

    //event handlers

    //listeners initialization
    d.addEventListener('laserbeamExplode', _this.explode);
}

LaserBeam.prototype.explode = function (e) {
    this.isExploded = true;
}

LaserBeam.prototype.update = function (dt, p) {
    var m = this.mass;
    var v = this.velocity;
    var pos = this.position;

    pos.plus(p.gravityPositionImpact(dt, m, v));
    v.plus(p.gravityVelocityImpact(dt, m));

    if (pos.x < 0 || pos.x > canvas.width || pos.y < 0 || pos.y > canvas.height) {
        this.isExploded = true;
    }
}

LaserBeam.prototype.draw = function (c, ctx) {
    ctx.fillStyle = "rgb(242,23,23)";
    ctx.fillRect(this.position.x, this.position.y, this.length, 1);
}