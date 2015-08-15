
//d - document, c - canvas, ctx - context
function Mouse(d, c, ctx) {
    //private variable
    var _this = this;

    //canvas mouse position
    this.x = 0;
    this.y = 0;

    //left button isPressed flag
    this.isDown = false;

    //private canvas bounding rectangle
    var r = c.getBoundingClientRect();

    //event handlers
    //e - event
    this.onMouseDown = function (e) {
        if (!_this.isDown) {
            _this.isDown = true;
            //TODO

        }
    }
    //e - event
    this.onMouseMove = function (e) {
        _this.refreshPos(e, r);

        //TODO remove
        ctx.save();
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.fillStyle = "rgb(0,200,0)";
        ctx.fillRect(_this.x, _this.y, 10, 10);
        ctx.restore();
    }
    //e - event
    this.onMouseUp = function (e) {
        _this.isDown = false;
        //TODO

    }

    //get current canvas mouse position
    this.getPos = function () {
        return new Vec2(_this.x, _this.y);
    }

    //refresh current canvas mouse position
    //e - event, r - canvas bounding rectangle
    this.refreshPos = function (e, r) {
        _this.x = Math.round((e.clientX - r.left) / (r.right - r.left) * c.width);
        _this.y = Math.round((e.clientY - r.top) / (r.bottom - r.top) * c.height);
    }

    //listeners initialization
    d.addEventListener('mousedown', _this.onMouseDown);
    d.addEventListener('mousemove', _this.onMouseMove);
    d.addEventListener('mouseup', _this.onMouseUp);
}