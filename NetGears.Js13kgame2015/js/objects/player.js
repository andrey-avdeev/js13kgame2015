function Player(params) {
    BaseObject.call(this, params);

    this.width = params.width;
    this.height = params.height;

    this.m = params.m;
}
Player.prototype.update = function () {
    //collisions
    for (var i = 0; i < $.wallsLength; i++) {
        if ($.walls[i].isActive) {
            if ($.utils.IsRectanglesCollides(this.x, this.y, this.width, this.height, $.walls[i].x, $.walls[i].y, $.walls[i].width, $.walls[i].height)) {
                this.isActive = false;
                this.isRendered = false;

                $.explosions[this.index].x = this.x;
                $.explosions[this.index].y = this.y;
                $.explosions[this.index].vx = $.walls[i].vx;
                $.explosions[this.index].time = 0;
                $.explosions[this.index].isActive = true;
                $.explosions[this.index].isRendered = true;
                $.utils.PlaySound([3, , 0.2785, 0.5342, 0.3971, 0.1444, , 0.2192, , , , 0.4179, 0.8065, , , 0.7405, , , 1, , , , , 0.21]);
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
                $.utils.PlaySound([3, , 0.2785, 0.5342, 0.3971, 0.1444, , 0.2192, , , , 0.4179, 0.8065, , , 0.7405, , , 1, , , , , 0.21]);
            }
        }
    }

    this.x += this.vx * $.dt;
    this.y += ($.g * $.dt * $.dt / 2) + this.vy * $.dt;

    this.vy += $.dt * $.g * this.m;
}
Player.prototype.render = function () {
    $.ctxfg.drawImage($.cPrePlayer, Math.round(this.x), Math.round(this.y));
}