
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

    //event handlers
    //e - event
    this.shoot = function (e) {
        console.log("Bang!");
    }
    //e - event
    this.explode = function (e) {
        _this.isExploded = true;
    }

    //listeners initialization
    d.addEventListener('playerShoot', _this.shoot);
    d.addEventListener('playerExplode', _this.explode);
}