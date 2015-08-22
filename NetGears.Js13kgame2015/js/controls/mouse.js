function Mouse(d, ev, c) {
    var _t = this;

    //parameters
    this.position = new Vec2(0, 0);

    this.isDown = false;

    //private canvas bounding rectangle
    var r = c.getBoundingClientRect();

    this.refreshPosition = function (e, r) {
        _t.position.set(Math.round((e.clientX - r.left) / (r.right - r.left) * c.width), Math.round((e.clientY - r.top) / (r.bottom - r.top) * c.height));
    }

    //event handlers
    this.onMouseDown = function (e) {       
        if (!_t.isDown) {
            _t.isDown = true;
            //TODO
            d.dispatchEvent(ev.playerShoot());         
        }
    }
    this.onMouseMove = function (e) {
        _t.refreshPosition(e, r);
        //TODO
    }
    this.onMouseUp = function (e) {
        _t.isDown = false;
        //TODO
    }

    //listeners initialization
    d.addEventListener('mousedown', _t.onMouseDown);
    d.addEventListener('mousemove', _t.onMouseMove);
    d.addEventListener('mouseup', _t.onMouseUp);
}