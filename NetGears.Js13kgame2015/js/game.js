function Game(d, c, ctx, p, gui, asteroids, explosions, laserbeams, player, stars, walls) {
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

    function update(dt) {
        checkCollision(player, walls);
        checkCollision(player, asteroids);

        checkCollisions(walls, asteroids);
        checkCollisions(laserbeams, asteroids);

        if (player != null && player.isActive) player.update(dt, p);

        if (asteroids.length > 0) {
            asteroids.forEach(function (asteroid, i, arr) {
                if (asteroid.isActive) {
                    asteroid.update(dt, p);
                } else {
                    arr.splice(i, 1);
                }
            });
        }
        if (explosions.length > 0) {
            explosions.forEach(function (explosion, i, arr) {
                if (explosion.isActive) {
                    explosion.update(dt, p);
                } else {
                    arr.splice(i, 1);
                }
            });
        }
        if (laserbeams.length > 0) {
            laserbeams.forEach(function (laserbeam, i, arr) {
                if (laserbeam.isActive) {
                    laserbeam.update(dt, p);
                } else {
                    arr.splice(i, 1);
                }
            });
        }
        if (stars.length > 0) {
            stars.forEach(function (star, i, arr) {
                if (star.isActive) {
                    star.update(dt, p);
                } else {
                    arr.splice(i, 1);
                }
            });
        }
        if (walls.length > 0) {
            wall.forEach(function (wall, i, arr) {
                if (wall.isActive) {
                    wall.update(dt, p);
                } else {
                    arr.splice(i, 1);
                }
            });
        }
    };
    function render(c, ctx) {
        //saving context
        ctx.save();
        //clearing canvas
        ctx.clearRect(0, 0, c.width, c.height);

        if (player != null && player.isActive) player.draw(ctx);

        if (asteroids.length > 0) {
            asteroids.forEach(function (asteroid, i, arr) {
                asteroid.draw(ctx);
            });
        }
        if (explosions.length > 0) {
            explosions.forEach(function (explosion, i, arr) {
                explosion.draw(ctx);
            });
        }
        if (laserbeams.length > 0) {
            laserbeams.forEach(function (laserbeam, i, arr) {
                laserbeam.draw(ctx);
            });
        }
        if (stars.length > 0) {
            stars.forEach(function (star, i, arr) {
                star.draw(ctx);
            });
        }
        if (walls.length > 0) {
            walls.forEach(function (wall, i, arr) {
                wall.draw(ctx);
            });
        }
        if (gui != null) gui.draw(ctx);

        //restoring context
        ctx.restore();
    };
    function drawArray(array) {

    }

    requestAnimationFrame(frame);
}
