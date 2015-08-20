function Keyboard(d, ev) {
    var _t = this;

    //parameters
    this.keys = {
        isPressed: {}
    }

    //event handlers
    this.onKeyDown = function (e) {
        if (!_t.keys.isPressed[e.keyCode]) {
            _t.keys.isPressed[e.keyCode] = true;

            switch (e.keyCode) {
                case 82:
                    d.dispatchEvent(ev.gravityReverse());
                    break;
            }
        }
    }
    this.onKeyUp = function (e) {
        _t.keys.isPressed[e.keyCode] = false;
        switch (e.keyCode) {
            case 82:
                d.dispatchEvent(ev.gravityReverse());
                break;
        }
    }

    //listeners initialization
    d.addEventListener('keydown', _t.onKeyDown);
    d.addEventListener('keyup', _t.onKeyUp);
}