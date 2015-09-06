function Asteroid(params) {
    BaseObject.call(this, params);

    this.radius = params.radius;

    this.m = params.m;

    this.isRendered = false;
}
Asteroid.prototype.update = function () {
    if (!this.isRendered && (this.x - this.radius) <= $.width) {
        this.isRendered = true;
    }
    if (this.x + this.radius <= 0) {
        this.isRendered = false;
        this.isActive = false;
    }

    //collisions
    for (var i = 0; i < $.wallsLength; i++) {
        if ($.utils.IsRectangleCircleCollides($.walls[i].x, $.walls[i].y, $.walls[i].width, $.walls[i].height, this.x, this.y, this.radius)) {
            if ($.walls[i].wallType === 'top') {
                this.y = $.walls[i].y + $.walls[i].height + this.radius;
                this.vy = 0;
            } else {
                this.y = $.walls[i].y - this.radius;
                this.vy = 0;
            }
            //return true;
        }
    }
    //for (var i = 0; i < $.asteroidsLength; i++) {
    //    if ($.utils.IsCirclesCollides(this.x, this.y, this.radius, $.asteroids[i].x, $.asteroids[i].y, $.asteroids[i].radius)) {
    //        //return true;
    //    }
    //}

    this.x += this.vx * $.dt;
    this.y += ($.g * $.dt * $.dt / 2) + this.vy * $.dt;

    this.vy += $.dt * $.g * this.m;
}
Asteroid.prototype.render = function () {
    $.ctxfg.beginPath();
    $.ctxfg.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    $.ctxfg.fillStyle = 'grey';
    $.ctxfg.fill();
    $.ctxfg.strokeStyle = 'white';
    $.ctxfg.stroke();
}

Asteroid.prototype.refresh = function () {
    var randomRadius = $.utils.Random(1, 10);

    this.x = $.width + this.index * 10;
    this.y = Math.round($.utils.Random(0, $.height));
    this.radius = randomRadius;
    this.m = Math.round(10 / randomRadius) * 2;

    this.isActive = true;
}