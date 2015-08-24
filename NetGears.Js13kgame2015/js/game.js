function Game(d, ev, c, ctx) {
    //time parameters
    $.dt = 0;

    $.timeNow = 0;
    $.timeLast = 0;
    $.timeElapsed = 0;

    //physics parameters
    $.g = 9.8;

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

    function frame() {
        now = timeStamp();
        dt = dt + Math.min(1, (now - last) / 1000);    // duration in seconds
        while (dt > step) {
            dt = dt - step;
            update(dt);
        }
        render(c, ctx);

        last = now;
        requestAnimationFrame(frame);
    };

    function timeStamp() {
        return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
    };

    function update(t) {
        //updating positions of objects
        if (_t.asteroids.length > 0) {
            var asteroidsNew = new Array();
            _t.asteroids.forEach(function (asteroid, i, arr) {
                if (asteroid.isActive && !isCircleOut(asteroid)) {
                    asteroid.position.x += (asteroid.mass * _t.physics.gravity.x * t * t / 2) + (asteroid.velocity.x * t);
                    asteroid.position.y += (asteroid.mass * _t.physics.gravity.y * t * t / 2) + (asteroid.velocity.y * t);
                    asteroid.velocity.x += asteroid.mass * _t.physics.gravity.x * t;
                    asteroid.velocity.y += asteroid.mass * _t.physics.gravity.y * t;

                    asteroidsNew.push(asteroid);
                }
            });
            _t.asteroids = asteroidsNew;
        }
        if (_t.explosions.length > 0) {
            _t.explosions.forEach(function (explosion, i, arr) {
                if (explosion.isActive) {
                    //TODO
                } else {
                    arr.splice(i, 1);
                }
            });
        }
        if (_t.laserbeams.length > 0) {
            var laserbeamsNew = new Array();
            _t.laserbeams.forEach(function (laserbeam, i, arr) {
                if (laserbeam.isActive && !isRectangleOut(laserbeam)) {
                    laserbeam.position.x += laserbeam.velocity.x * t;

                    laserbeamsNew.push(laserbeam);
                }
            });
            _t.laserbeams = laserbeamsNew;
        }
        if (_t.player != null && _t.player.isActive) {
            _t.player.position.x += _t.player.mass * _t.physics.gravity.x * t * t / 2 + _t.player.velocity.x * t;
            _t.player.position.y += _t.player.mass * _t.physics.gravity.y * t * t / 2 + _t.player.velocity.y * t;
            _t.player.velocity.x += _t.player.mass * _t.physics.gravity.x * t;
            _t.player.velocity.y += _t.player.mass * _t.physics.gravity.y * t;
        }
        if (_t.stars.length > 0) {
            var starsNew = new Array();
            _t.stars.forEach(function (star, i, arr) {
                if (!isRectangleOut(star)) {
                    star.position.x += star.velocity.x * t;
                    star.position.y += star.velocity.y * t;

                    starsNew.push(star);
                }
            });
            _t.stars = starsNew;
        }
        if (_t.walls.length > 0) {
            var wallsNew = new Array();
            _t.walls.forEach(function (wall, i, arr) {
                if (!isRectangleOut(wall)) {
                    wall.position.x += wall.velocity.x * t;
                    wall.position.y += wall.velocity.y * t;

                    wallsNew.push(wall);
                }
            });
            _t.walls = wallsNew;
        }

        //checking collisions
        //checkCollision(player, walls);
        //checkCollision(player, asteroids);

        //checkCollisions(walls, asteroids);
        //checkCollisions(laserbeams, asteroids);

        //generate new objects
        if (_t.asteroids.length < 5) {
            _t.asteroids.push(new Asteroid(new Vec2(Random(_t.bound, c.width - _t.bound), Random(_t.bound, c.height - _t.bound)), new Vec2(Random(-1000, -100), 0), 10, 5));
        }
        if (_t.stars.length < 20) {
            _t.stars.push(new Star(new Vec2(Random(_t.bound, c.width - _t.bound), Random(_t.bound, c.height - _t.bound)), new Vec2(-1000, Random(-10, 10)), Random(1, 5), Random(1, 5)));
        }
        if (_t.walls.length < 100) {
            _t.walls.push(new Wall(new Vec2(c.width - 20, 1), new Vec2(-100, 0), 40, Random(10, 100)));
        }
    };
    function render(c, ctx) {
        //saving context
        ctx.save();
        //clearing canvas
        ctx.clearRect(0, 0, c.width, c.height);

        if (_t.asteroids.length > 0) {
            _t.asteroids.forEach(function (asteroid, i, arr) {
                _t.graphic.drawAsteroid(asteroid);
            });
        }
        if (_t.explosions.length > 0) {
            _t.explosions.forEach(function (explosion, i, arr) {
                _t.graphic.drawExplosion(explosion);
            });
        }
        if (_t.laserbeams.length > 0) {
            _t.laserbeams.forEach(function (laserbeam, i, arr) {
                _t.graphic.drawLaserBeam(laserbeam);
            });
        }
        if (_t.stars.length > 0) {
            _t.stars.forEach(function (star, i, arr) {
                _t.graphic.drawStar(star);
            });
        }
        if (_t.walls.length > 0) {
            _t.walls.forEach(function (wall, i, arr) {
                _t.graphic.drawWall(wall);
                console.log(wall);
            });
        }
        if (_t.player != null && _t.player.isActive) _t.graphic.drawPlayer(_t.player);
        if (_t.gui != null) _t.graphic.drawGui(_t.gui);

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



