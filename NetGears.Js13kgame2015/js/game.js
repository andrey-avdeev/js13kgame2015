function Game() {
    var _this = this;
    this.doc = document;

    this.keyboard = new Keyboard();
    this.doc.addEventListener('keydown', this.keyboard.onKeyDown);
    this.doc.addEventListener('keyup', this.keyboard.onKeyUp);

    this.utils = new Utils();


    //time parameters
    this.dt = 0;
    this.timeNow = 0;
    this.timeLast = GetTimeStamp();
    this.timeElapsed = 0;


    //physics parameters
    this.g = 9.8;


    //game arrays
    this.starsLength = 100;
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

    this.cbg = this.doc.getElementById("cbg");
    this.cfg = this.doc.getElementById("cfg");
    this.cgui = this.doc.getElementById("cgui");

    this.cbg.width = this.width;
    this.cbg.height = this.height;
    this.cfg.width = this.width;
    this.cfg.height = this.height;
    this.cgui.width = this.width;
    this.cgui.height = this.height;

    this.ctxbg = this.cbg.getContext("2d");
    this.ctxfg = this.cfg.getContext("2d");
    this.ctxgui = this.cgui.getContext("2d");

    this.cPreStars = new Array(this.starsLength);
    this.ctxPreStars = new Array(this.starsLength);

    this.cPrePlayer = {};
    this.ctxPrePlayer = {};


    this.cPreWalls = new Array(this.wallsLength);
    this.ctxPreWalls = new Array(this.wallsLength);
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
        _this.ctxbg.save();
        _this.ctxfg.save();
        _this.ctxgui.save();

        _this.ctxbg.clearRect(0, 0, _this.width, _this.height);
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

        _this.ctxbg.restore();
        _this.ctxfg.restore();
        _this.ctxgui.restore();
    }
    //Frame END


    //preparing system START
    function Initialization() {
        for (var i = 0; i < _this.starsLength; i++) {
            _this.stars[i] = new Star({
                x: _this.width + _this.utils.Random(0, 100),
                y: _this.height / 2 + _this.utils.Random(-100, 100),
                vx: _this.utils.Random(-200, -70),
                vy: _this.utils.Random(-10, 10),
                width: Math.round(_this.utils.Random(1, 6)),
                height: Math.round(_this.utils.Random(1, 6)),
                arrayIndex: i,
                timeMax: 4
            });

            _this.cPreStars[i] = _this.doc.createElement('canvas');
            _this.cPreStars[i].width = _this.stars[i].width;
            _this.cPreStars[i].height = _this.stars[i].height;

            _this.ctxPreStars[i] = _this.cPreStars[i].getContext('2d');
            _this.ctxPreStars[i].beginPath();
            _this.ctxPreStars[i].fillStyle = 'black';
            _this.ctxPreStars[i].fillRect(0, 0, _this.stars[i].width, _this.stars[i].height);
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

        _this.cPrePlayer = _this.doc.createElement('canvas');
        _this.cPrePlayer.width = 10;
        _this.cPrePlayer.height = 10;
        _this.ctxPrePlayer = _this.cPrePlayer.getContext('2d');
        _this.ctxPrePlayer.beginPath();
        _this.ctxPrePlayer.fillStyle = 'green';
        _this.ctxPrePlayer.fillRect(0, 0, 10, 10);

        var k = 0;
        var wallWidth = 20;
        for (var i = 0; i < _this.wallsLength / 2; i++, k++) {
            _this.walls[i] = new Wall({
                x: _this.width + k * (wallWidth) + 1,
                y: 0,
                arrayIndex: i,
                type: 'top',
                width: wallWidth,
                height: Math.round(_this.utils.Random(30, 140)),
                vx: -90,
                vy: 0
            });

            _this.cPreWalls[i] = _this.doc.createElement('canvas');
            _this.cPreWalls[i].width = _this.walls[i].width + 1;
            _this.cPreWalls[i].height = _this.walls[i].height;

            _this.ctxPreWalls[i] = _this.cPreWalls[i].getContext('2d');
            _this.ctxPreWalls[i].beginPath();
            _this.ctxPreWalls[i].fillStyle = 'red';
            _this.ctxPreWalls[i].fillRect(0, 0, _this.walls[i].width + 1, _this.walls[i].height);
        }
        _this.lastTopWallindex = k - 1;
        _this.walls[k - 1].isLastTop = true;

        k = 0;
        for (var i = _this.wallsLength / 2; i < _this.wallsLength; i++, k++) {
            var wallHeight = Math.round(_this.utils.Random(30, 140));
            _this.walls[i] = new Wall({
                x: _this.width + k * (wallWidth) + 1,
                y: _this.height - wallHeight,
                arrayIndex: i,
                type: 'bottom',
                width: wallWidth,
                height: wallHeight,
                vx: -90,
                vy: 0
            });

            _this.cPreWalls[i] = _this.doc.createElement('canvas');
            _this.cPreWalls[i].width = _this.walls[i].width + 1;
            _this.cPreWalls[i].height = _this.walls[i].height;

            _this.ctxPreWalls[i] = _this.cPreWalls[i].getContext('2d');
            _this.ctxPreWalls[i].beginPath();
            _this.ctxPreWalls[i].fillStyle = 'brown';
            _this.ctxPreWalls[i].fillRect(0, 0, _this.walls[i].width + 1, _this.walls[i].height);
        }
        _this.lastBottomWallindex = (_this.wallsLength / 2) + k - 1;
        _this.walls[(_this.wallsLength / 2) + k - 1].isLastBottom = true;

        console.log(_this.cPreWalls);
    }

    this.Start = function () {
        Initialization();
        console.log(_this.walls);
        requestAnimationFrame(Frame);
    }
    //preparing system END
}