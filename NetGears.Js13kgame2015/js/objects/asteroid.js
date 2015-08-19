
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

    this.type = "circle";
    this.radius = 10;

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
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
}