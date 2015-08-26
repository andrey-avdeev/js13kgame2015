function Game(d, ev, c, ctx) {
    //time parameters
    $.dt = 0;

    $.timeNow = 0;
    $.timeLast = GetTimeStamp();
    $.timeElapsed = 0;

    //physics parameters
    $.g = 9.8;

    //updating system
    $.effectsLength = 10;
    $.objectsLength = 100;

    $.effects = new Array($.effectsLength);
    $.objects = new Array($.objectsLength);

    //gui system
    $.lives = 3;

    $.boostsLength = 2;
    $.boosts = new Array($.boostsLength);

    var _t = this;

    this.graphic = new Graphic(ctx);
    this.physics = new Physics(d);

    this.gui = new GUI(d, ev);

    this.asteroids = new Array();
    this.explosions = new Array();
    this.laserbeams = new Array();
    this.player = new Player(new Vec2(Random(10, 100), Random(10, 100)), new Vec2(0, 0), 100, 10, 10);
    this.stars = new Array();
    this.walls = new Array();

    this.bound = 10

    var now,
        dt = 0,
        last = timeStamp(),
        step = 1 / 60;


    function Frame() {
        $.timeNow = GetTimeStamp();

        $.dt = ($.timeNow - $.timeLast) / 1000;
        $.timeElapsed += $.dt;

        update();
        render();

        $.timeLast = $.timeNow;

        requestAnimationFrame(Frame);
    }

    function GetTimeStamp() {
        return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
    }


    function update() {
        for (var i = 0; i < $.effectsLength; i++) {
            $.effects[i].update();
        }
        for (var i = 0; i < $.objectsLength; i++) {
            $.objects[i].update();
        }
    };
    function render() {
        //saving context
        ctx.save();
        //clearing canvas
        ctx.clearRect(0, 0, c.width, c.height);

        for (var i = 0; i < $.effectsLength; i++) {
            $.effects[i].render();
        }
        for (var i = 0; i < $.objectsLength; i++) {
            $.objects[i].render();
        }

        //restoring context
        ctx.restore();
    };

    function initialization() {
        //this.bound = 10

        //this.Random = function (min, max) {
        //    return Math.random() * (max - min) + min;
        //}

        //this.pushExplosion = function (explosions, position) {
        //    explosions.push(new Explosion(position, _t.Random(3, 10), _t.Random(3, 10)));
        //}
        //this.pushLaserBeam = function (laserbeams, position) {
        //    laserbeams.push(new LaserBeam(position, new Vec2(20, 0), 10, 1));
        //}
        ////TODO - player pushing or creating
        //this.pushStar = function (stars) {
        //    stars.push(new Star(new Vec2(_t.Random(_t.bound, c.width - _t.bound), _t.Random(_t.bound, c.height - _t.bound)), new Vec2(_t.Random(-1, -10), _t.Random(-2, 2)), _t.Random(1, 4), _t.Random(1, 4)));
        //}
        //this.pushWall = function (walls, position) {
        //    walls.push(new Wall(position, new Vec2(-10, 0), 10, _t.Random(10, 100)));
        //}
    }


    initialization();
    requestAnimationFrame(frame);

    function Random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function isRectangleOut(rectangle) {
        return (rectangle.position.x + rectangle.width < 0 ||
                rectangle.position.x > c.width ||
                rectangle.position.y + rectangle.height < 0 ||
                rectangle.position.y > c.height);
    }
    function isCircleOut(circle) {
        return (circle.position.x + circle.radius < 0 ||
                circle.position.x > c.width ||
                circle.position.y + c.radius < 0 ||
                circle.position.y > c.height);
    }

    this.addExplosion = function (e) {
        _t.explosions.push(new Explosion());
    }
    this.addLaserBeam = function (e) {
        _t.laserbeams.push(new LaserBeam(new Vec2(_t.player.position.x + _t.player.width, _t.player.position.y + _t.player.height / 2), new Vec2(100, 0), Random(10, 15), 1));
    }

    //listeners initialization
    d.addEventListener('explosionCreate', _t.addExplosion);
    //d.addEventListener('laserbeamCreate', this.addLaserBeam);
    d.addEventListener('playerShoot', _t.addLaserBeam);
}



