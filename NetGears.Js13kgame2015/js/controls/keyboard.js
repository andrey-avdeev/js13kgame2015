
//d - document, ev - customevents
function Keyboard(d, ev) {
    //private variable
    var _this = this;

    //keys state
    this.keys = {
        isPressed: {}
    }

    //event handlers
    //e - event
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
    //e - event
    this.onKeyUp = function (e) {
        _this.keys.isPressed[e.keyCode] = false;
        switch (e.keyCode) {
            case 82:
                d.dispatchEvent(ev.gravityReverse());
                break;
        }
    }

    //listeners initialization
    d.addEventListener('keydown', _this.onKeyDown);
    d.addEventListener('keyup', _this.onKeyUp);
}