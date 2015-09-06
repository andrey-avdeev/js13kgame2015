function LaserBeam(params) {
    BaseObject.call(this, params);

    this.width = params.width;
    this.height = params.height;

    this.isActive = false;
    this.isRendered = false;
}
LaserBeam.prototype.update = function () {
    //out of bounds
    if (this.x > $.width) {
        this.isActive = false;
        this.isRendered = false;
    }

    //collisions
    for (var i = 0; i < $.wallsLength; i++) {
        if ($.walls[i].isActive) {
            if ($.utils.IsRectanglesCollides(this.x, this.y, this.width, this.height, $.walls[i].x, $.walls[i].y, $.walls[i].width, $.walls[i].height)) {
                this.isActive = false;
                this.isRendered = false;
            }
        }
    }
    for (var i = 0; i < $.asteroidsLength; i++) {
        if ($.asteroids[i].isActive) {
            if ($.utils.IsRectangleCircleCollides(this.x, this.y, this.width, this.height, $.asteroids[i].x, $.asteroids[i].y, $.asteroids[i].radius)) {
                this.isActive = false;
                this.isRendered = false;

                $.asteroids[i].isActive = false;
                $.asteroids[i].isRendered = false;

                $.explosions[this.index].x = this.x;
                $.explosions[this.index].y = this.y;
                $.explosions[this.index].vx = $.asteroids[i].vx;
                $.explosions[this.index].time = 0;
                $.explosions[this.index].isActive = true;
                $.explosions[this.index].isRendered = true;
                $.utils.PlaySound([3, , 0.1434, 0.6081, 0.2012, 0.0568, , 0.0091, , , , , , , , , , , 1, , , , , 0.21]);
            }
        }
    }


    this.x += this.vx * $.dt;
}
LaserBeam.prototype.render = function () {
    $.ctxfg.drawImage($.cPreLaserBeam, Math.round(this.x), Math.round(this.y));
}