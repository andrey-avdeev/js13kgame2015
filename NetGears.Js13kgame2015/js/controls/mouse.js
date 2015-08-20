function Mouse(d, ev, c) {
    var _this = this;

    //parameters
    this.position = new Vec2(0, 0);

    this.isDown = false;

    //private canvas bounding rectangle
    var r = c.getBoundingClientRect();

    this.refreshPosition = function (e, r) {
        _this.position.set(Math.round((e.clientX - r.left) / (r.right - r.left) * c.width), Math.round((e.clientY - r.top) / (r.bottom - r.top) * c.height));
    }

    //event handlers
    this.onMouseDown = function (e) {
        if (!_this.isDown) {
            _this.isDown = true;
            //TODO
            d.dispatchEvent(ev.playerShoot());
        }
    }
    this.onMouseMove = function (e) {
        _this.refreshPosition(e, r);
        //TODO
    }
    this.onMouseUp = function (e) {
        _this.isDown = false;
        //TODO
    }

    //listeners initialization
    d.addEventListener('mousedown', this.onMouseDown);
    d.addEventListener('mousemove', this.onMouseMove);
    d.addEventListener('mouseup', this.onMouseUp);
}