
//d - document
function Player(d) {
    //private variable
    var _this = this;

    //flag for removing dead object
    this.isBlown = false;

    //canvas player position
    this.position = new Vec2(0, 0);

    //canvas player velosity
    this.velosity = new Vec2(10, 0);

    //player mass
    this.mass = 1;

    //event handlers
    //e - event
    this.shot = function (e) {
        console.log(e.detail.target);
        _this.position.set(e.detail.target.x, e.detail.target.y);
        console.log(_this.position);
    }
    //e - event
    this.blow = function (e) {
        _this.isBlown = true;
    }

    //listeners initialization
    d.addEventListener('laserbeamShot', _this.shot);
    d.addEventListener('playerBlow', _this.blow);
}