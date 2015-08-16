
//d - document
function Physics(d) {
    //private variable
    var _this = this;

    //game world gravity
    this.gravity = new Vec2(0, 1);

    //event handlers
    //e - event
    this.gravityReverse = function (e) {
        _this.gravity.scale(-1);
    }

    //listeners initialization
    d.addEventListener('gravityReverse', _this.gravityReverse);
}