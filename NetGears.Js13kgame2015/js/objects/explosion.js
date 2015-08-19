
//d - document, pos - initial position
function Explosion(d, pos) {
    //private variable
    var _this = this;

    //flag for removing finished animation
    this.isFinished = false;

    //canvas explosion position
    this.position = new Vec2(0, 0);
}

Explosion.prototype.update = function (dt, p) {

}

Explosion.prototype.draw = function (c, ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
}