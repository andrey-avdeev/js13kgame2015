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
    if (!this.isRendered && this.x <= $.width) {
        this.isRendered = true;
    }
    if (this.x + this.width <= 0) {
        this.isRendered = false;

        var wallTempHeight = Math.round($.utils.Random(10, 100));
        if (this.type === 'top') {
            this.x = $.walls[$.lastTopWallindex].x + $.walls[$.lastTopWallindex].width + 1;

            this.height = wallTempHeight;

            $.lastTopWallindex = this.arrayIndex;

            $.cPreWalls[this.arrayIndex].width = this.width + 1;
            $.cPreWalls[this.arrayIndex].height = this.height;
            $.ctxPreWalls[this.arrayIndex] = $.cPreWalls[this.arrayIndex].getContext('2d');
            $.ctxPreWalls[this.arrayIndex].beginPath();
            $.ctxPreWalls[this.arrayIndex].fillStyle = 'red';
            $.ctxPreWalls[this.arrayIndex].fillRect(0, 0, this.width + 1, this.height);
            $.ctxPreWalls[this.arrayIndex].stroke();
        } else {

            this.x = $.walls[$.lastBottomWallindex].x + $.walls[$.lastBottomWallindex].width + 1;

            this.y = $.height - wallTempHeight;

            this.height = wallTempHeight;

            $.lastBottomWallindex = this.arrayIndex;

            $.cPreWalls[this.arrayIndex].width = this.width + 1;
            $.cPreWalls[this.arrayIndex].height = this.height;
            $.ctxPreWalls[this.arrayIndex] = $.cPreWalls[this.arrayIndex].getContext('2d');
            $.ctxPreWalls[this.arrayIndex].beginPath();
            $.ctxPreWalls[this.arrayIndex].fillStyle = 'brown';
            $.ctxPreWalls[this.arrayIndex].fillRect(0, 0, this.width + 1, this.height);
            $.ctxPreWalls[this.arrayIndex].stroke();
        }
    }

    this.x += this.vx * $.dt;
}
Wall.prototype.render = function () {
    //$.ctxfg.beginPath();
    //$.ctxfg.fillStyle = 'black';
    //$.ctxfg.fillRect(this.x, this.y, this.width, this.height);
    $.ctxfg.drawImage($.cPreWalls[this.arrayIndex], Math.round(this.x), Math.round(this.y));
}