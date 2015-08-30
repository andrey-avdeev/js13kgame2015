function Wall(params) {
    BaseObject.call(this, params);

    this.width = params.width;
    this.height = params.height;

    this.type = params.type;

    this.arrayIndex = params.arrayIndex;

    this.isLastTop = false;
    this.isLastBottom = false;

    this.isRendered = false;
}
Wall.prototype.update = function () {
    if (!this.isRendered && this.x < $.width) {
        this.isRendered = true;
    }
    if (this.x + this.width <= 0) {
        this.isRendered = false;

        var wallTempHeight = $.utils.Random(10, 100)
        if (this.type === 'top') {
            this.x = $.walls[$.lastTopWallindex].x + $.walls[$.lastTopWallindex].width;
            this.height = wallTempHeight;

            $.lastTopWallindex = this.arrayIndex;
        } else {

            this.x = $.walls[$.lastBottomWallindex].x + $.walls[$.lastBottomWallindex].width;
            this.y = $.height - wallTempHeight;
            this.height = wallTempHeight;

            $.lastBottomWallindex = this.arrayIndex;
        }
    }

    this.x += this.vx * $.dt;
}
Wall.prototype.render = function () {
    $.ctxfg.beginPath();
    $.ctxfg.fillStyle = 'red';
    $.ctxfg.fillRect(this.x, this.y, this.width, this.height);
}