
//d - document
function Player(d) {
    //private variable
    var _this = this;

    //flag for removing dead object
    this.isExploded = false;

    //canvas player position
    this.position = new Vec2(0, 0);

    //canvas player velosity
    this.velosity = new Vec2(10, 0);

    //player mass
    this.mass = 1;

    this.update = function (dt, g) {
        _this.position.plus(g);
    };

    this.draw = function (canvas, ctx) {

    };

    //event handlers
    //e - event
    this.shoot = function (e) {

    };
    //e - event
    this.explode = function (e) {
        _this.isExploded = true;
    };

    //listeners initialization
    d.addEventListener('playerShoot', _this.shoot);
    d.addEventListener('playerExplode', _this.explode);
}