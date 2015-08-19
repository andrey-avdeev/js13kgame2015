
//c - canvas, ctx - context, p - physics
function Game(c, ctx, p) {
    var now,
        dt = 0,
        last = timeStamp(),
        step = 1 / 60;

    function frame() {
        now = timeStamp();
        dt = dt + Math.min(1, (now - last) / 1000);    // duration in seconds
        while (dt > step) {
            dt = dt - step;
            update();
        }
        render();

        last = now;
        requestAnimationFrame(frame);
    };

    function timeStamp() {
        return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
    };

    function update() {
        //check if player is exploded, then update
        if (!player.isExploded) {
            player.update(dt, p);
        } else {
            //TODO
        }

        //check if asteroid in array is exploded, then remove from array or update it
        if (asteroids.length > 0) {
            asteroids.forEach(function (asteroid, i, arr) {
                if (!asteroid.isExploded) {
                    asteroid.update(dt, p);
                } else {
                    arr.splice(i, 1);
                }
            });
        }


        //check if laserbeam in array is exploded, then remove from array or update it
        if (laserbeams.length > 0) {
            laserbeams.forEach(function (laserbeam, i, arr) {
                if (!laserbeam.isExploded) {
                    laserbeam.update(dt, p);
                } else {
                    arr.splice(i, 1);
                }
            });
        }
    };
    function render() {
        //saving context
        ctx.save();
        //clearing canvas
        ctx.clearRect(0, 0, c.width, c.height);

        //draw player on canvas
        if (!player.isExploded) {
            player.draw(c, ctx);
        } else {
            //TODO
        }

        ////draw asteroids on canvas
        if (asteroids.length > 0) {
            asteroids.forEach(function (asteroid, i, arr) {
                asteroid.draw(c, ctx);
            });
        }

        ////draw laserbeams on canvas
        if (laserbeams.length > 0) {
            laserbeams.forEach(function (laserbeam, i, arr) {
                laserbeam.draw(c, ctx);
            });
        }

        //restoring context
        ctx.restore();
    };

    requestAnimationFrame(frame);
}