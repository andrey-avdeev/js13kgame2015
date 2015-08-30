function Keyboard() {
    var _t = this;

    this.keys = {
        isPressed: {}
    }

    this.onKeyDown = function (e) {
        if (!_t.keys.isPressed[e.keyCode]) {
            _t.keys.isPressed[e.keyCode] = true;

            switch (e.keyCode) {
                case 82:
                    $.g *= -1;
                    break;
            }
        }
    }
    this.onKeyUp = function (e) {
        _t.keys.isPressed[e.keyCode] = false;
        switch (e.keyCode) {
            case 82:
                $.g *= -1;
                break;
        }
    }
}