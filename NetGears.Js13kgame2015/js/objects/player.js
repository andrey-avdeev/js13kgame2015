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

                $.explosions[this.index].refresh(this.x, this.y, $.walls[i].vx);
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

                $.explosions[this.index].refresh(this.x, this.y, $.asteroids[i].vx);
                $.utils.PlaySound([3, , 0.2785, 0.5342, 0.3971, 0.1444, , 0.2192, , , , 0.4179, 0.8065, , , 0.7405, , , 1, , , , , 0.21]);
            }
        }
    }
    for (var i = 0; i < $.powerupsLength; i++) {
        if ($.powerups[i].isActive) {
            if ($.utils.IsRectanglesCollides(this.x, this.y, this.width, this.height, $.powerups[i].x, $.powerups[i].y, $.powerups[i].width, $.powerups[i].height)) {

                $.powerups[i].isActive = false;
                $.powerups[i].isRendered = false;

                $.gui.score += 10;

                $.utils.PlaySound([1, , 0.0714, , 0.4326, 0.3646, , 0.4309, , , , , , , , 0.5024, , , 1, , , , , 0.5]);
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

Player.prototype.shoot = function () {
    var i = 0;
    while (i < $.laserbeamsLength && $.laserbeams[i].isActive) {
        i++
    }
    if (i < $.laserbeamsLength) {
        $.utils.PlaySound([2, , 0.1377, 0.1855, 0.2461, 0.6816, 0.0768, -0.3795, , , , , , 0.1207, 0.0623, , , , 1, , , , , 0.21]);
        $.laserbeams[i].refresh(this.x + this.width, this.y + this.height / 2);
    }
}