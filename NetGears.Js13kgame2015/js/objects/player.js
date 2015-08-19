
//d - document, pos - initial position, ev - custom events
function Player(d, pos, ev) {
    //private variable
    var _this = this;

    //flag for removing dead object
    this.isExploded = false;

    //canvas player position
    this.position = new Vec2(pos.x, pos.y);

    //canvas player velosity
    this.velosity = new Vec2(10, 0);

    //player mass
    this.mass = 0.01;

    this.type = "rectangle";
    this.width = 10;
    this.height = 5;

    this.update = function (dt, p) {
        _this.position.plus(p.gravityPositionImpact(dt, _this.mass, _this.velosity));
        _this.velosity.plus(p.gravityVelocityImpact(dt, _this.mass));

        if (_this.position.x < 0 || _this.position.x > canvas.width || _this.position.y < 0 || _this.position.y > canvas.height) {
            _this.isExploded = true;
        }
    };

    this.draw = function (c, ctx) {
        ctx.fillStyle = "rgb(0,200,0)";
        ctx.fillRect(_this.position.x, _this.position.y, 10, 10);
    };

    //event handlers
    //e - event
    this.shoot = function (e) {
        d.dispatchEvent(ev.laserbeamCreate(_this.position));
    };
    //e - event
    this.explode = function (e) {
        _this.isExploded = true;
    };

    //listeners initialization
    d.addEventListener('playerShoot', _this.shoot);
    d.addEventListener('playerExplode', _this.explode);
}