function Game() {
    var _this = this;
    var doc = document;

    this.keyboard = new Keyboard();
    doc.addEventListener('keydown', this.keyboard.onKeyDown);
    doc.addEventListener('keyup', this.keyboard.onKeyUp);

    this.utils = new Utils();


    //time parameters
    this.dt = 0;
    this.timeNow = 0;
    this.timeLast = GetTimeStamp();
    this.timeElapsed = 0;


    //physics parameters
    this.g = 9.8;


    //game arrays
    this.starsLength = 20;
    this.explosionsLength = 31;

    this.asteroidsLength = 30;
    this.laserbeamsLength = this.explosionsLength - 1;
    this.powerupsLength = 5;
    this.wallsLength = 44;

    this.objectsLength = this.asteroidsLength + this.laserbeamsLength + this.powerupsLength + this.wallsLength;


    this.player = {};

    this.stars = new Array(this.starsLength);
    this.explosions = new Array(this.explosionsLength);

    this.walls = new Array(this.wallsLength);

    this.lastTopWallindex = 0;
    this.lastBottomWallindex = 0;
    //this.objects = new Array(this.objectsLength);

    //rendering system START
    this.width = 400;
    this.height = 300;

    this.cbg = doc.getElementById("cbg");
    this.cfg = doc.getElementById("cfg");
    this.cgui = doc.getElementById("cgui");

    this.cbg.width = this.width;
    this.cbg.height = this.height;
    this.cfg.width = this.width;
    this.cfg.height = this.height;
    this.cgui.width = this.width;
    this.cgui.height = this.height;

    this.ctxbg = this.cbg.getContext("2d");
    this.ctxfg = this.cfg.getContext("2d");
    this.ctxgui = this.cgui.getContext("2d");
    //rendering system END


    //Frame START
    function Frame() {

        _this.timeNow = GetTimeStamp();

        _this.dt = (_this.timeNow - _this.timeLast) / 1000;
        _this.timeElapsed += _this.dt;

        Update();
        Render();

        _this.timeLast = _this.timeNow;

        requestAnimationFrame(Frame);
    }

    function GetTimeStamp() {
        return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
    }

    function Update() {
        for (var i = 0; i < _this.starsLength; i++) {
            if (_this.stars[i] != null && _this.stars[i].isActive) {
                _this.stars[i].update();
            }
        }
        for (var i = 0; i < _this.explosionsLength; i++) {
            if (_this.explosions[i] != null && _this.explosions[i].isActive) {
                _this.explosions[i].update();
            }
        }

        _this.player.update();

        for (var i = 0; i < _this.wallsLength; i++) {
            if (_this.walls[i] != null && _this.walls[i].isActive) {
                _this.walls[i].update();
            }
        }
    };
    function Render() {
        //saving context
        _this.ctxfg.save();
        _this.ctxgui.save();

        _this.ctxfg.clearRect(0, 0, _this.width, _this.height);
        _this.ctxgui.clearRect(0, 0, _this.width, _this.height);

        for (var i = 0; i < _this.starsLength; i++) {
            if (_this.stars[i] != null && _this.stars[i].isRendered) {
                _this.stars[i].render();
            }
        }
        for (var i = 0; i < _this.explosionsLength; i++) {
            if (_this.explosions[i] != null && _this.explosions[i].isRendered) {
                _this.explosions[i].render();
            }
        }

        for (var i = 0; i < _this.wallsLength; i++) {
            if (_this.walls[i] != null && _this.walls[i].isRendered) {
                _this.walls[i].render();
            }
        };

        _this.player.render();

        _this.ctxfg.restore();
        _this.ctxgui.restore();
    }
    //Frame END


    //preparing system START
    function Initialization() {
        for (var i = 0; i < _this.starsLength; i++) {
            _this.stars[i] = new Star({
                x: _this.width + _this.utils.Random(0, 100),
                y: _this.height / 2 + _this.utils.Random(-50, 50),
                vx: _this.utils.Random(-200, -70),
                vy: _this.utils.Random(-5, 5),
                timeMax: 4
            });
        }
        for (var i = 0; i < _this.explosionsLength; i++) {
            _this.explosions[i] = new Explosion({
                x: _this.utils.Random(0, _this.width),
                y: _this.utils.Random(0, _this.height),
                timeMax: 1
            });
            _this.explosions[i].isActive = true;
            _this.explosions[i].isRendered = true;
        }

        _this.player = new Player({
            x: 0 + 50,
            y: _this.height / 2,
            vx: 0,
            vy: 0,
            m: 20
        });

        var k = 0;
        var wallWidth = 20;
        for (var i = 0; i < _this.wallsLength / 2; i++, k++) {
            _this.walls[i] = new Wall({
                x: _this.width + k * wallWidth,
                y: 0,
                arrayIndex: i,
                type: 'top',
                width: wallWidth,
                height: Math.round(_this.utils.Random(30, 140)),
                vx: -90,
                vy: 0
            });
        }
        _this.lastTopWallindex = k-1;
        _this.walls[k - 1].isLastTop = true;

        k = 0;
        for (var i = _this.wallsLength / 2; i < _this.wallsLength; i++, k++) {
            var wallHeight = Math.round(_this.utils.Random(30, 140));
            _this.walls[i] = new Wall({
                x: _this.width + k * wallWidth,
                y: _this.height - wallHeight,
                arrayIndex: i,
                type: 'bottom',
                width: wallWidth,
                height: wallHeight,
                vx: -90,
                vy: 0
            });
        }
        _this.lastBottomWallindex = (_this.wallsLength / 2) + k - 1;
        _this.walls[(_this.wallsLength / 2) + k - 1].isLastBottom = true;
    }

    this.Start = function () {
        Initialization();
        console.log(_this.walls);
        requestAnimationFrame(Frame);
    }
    //preparing system END
}