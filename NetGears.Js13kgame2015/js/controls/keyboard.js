
//d - document
function Keyboard(d) {
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
            //TODO

        }
    }
    //e - event
    this.onKeyUp = function (e) {
        _this.keys.isPressed[e.keyCode] = false;
        //TODO

    }

    //listeners initialization
    d.addEventListener('keydown', _this.onKeyDown);
    d.addEventListener('keyup', _this.onKeyUp);
}