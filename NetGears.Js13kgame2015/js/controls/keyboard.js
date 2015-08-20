function Keyboard(d, ev) {
    var _this = this;

    //parameters
    this.keys = {
        isPressed: {}
    }

    //event handlers
    this.onKeyDown = function (e) {
        if (!_this.keys.isPressed[e.keyCode]) {
            _this.keys.isPressed[e.keyCode] = true;

            switch (e.keyCode) {
                case 82:
                    d.dispatchEvent(ev.gravityReverse());
                    break;
            }
        }
    }
    this.onKeyUp = function (e) {
        _this.keys.isPressed[e.keyCode] = false;
        switch (e.keyCode) {
            case 82:
                d.dispatchEvent(ev.gravityReverse());
                break;
        }
    }

    //listeners initialization
    d.addEventListener('keydown', this.onKeyDown);
    d.addEventListener('keyup', this.onKeyUp);
}