
//d - document, c - canvas, ctx - context, (global variable) events - custom events
function Mouse(d, c, ctx) {
    //private variable
    var _this = this;

    //canvas mouse position
    this.position = new Vec2(0, 0);

    //left button isPressed flag
    this.isDown = false;

    //private canvas bounding rectangle
    var r = c.getBoundingClientRect();

    //event handlers
    //e - event
    this.onMouseDown = function (e) {
        if (!_this.isDown) {
            _this.isDown = true;

            d.dispatchEvent(events.laserbeamShot);
        }
    }
    //e - event
    this.onMouseMove = function (e) {
        _this.refreshPosition(e, r);
        //TODO

    }
    //e - event
    this.onMouseUp = function (e) {
        _this.isDown = false;
        //TODO

    }

    //refresh current canvas mouse position
    //e - event, r - canvas bounding rectangle
    this.refreshPosition = function (e, r) {
        _this.position.set(Math.round((e.clientX - r.left) / (r.right - r.left) * c.width), Math.round((e.clientY - r.top) / (r.bottom - r.top) * c.height));
    }

    //listeners initialization
    d.addEventListener('mousedown', _this.onMouseDown);
    d.addEventListener('mousemove', _this.onMouseMove);
    d.addEventListener('mouseup', _this.onMouseUp);
}